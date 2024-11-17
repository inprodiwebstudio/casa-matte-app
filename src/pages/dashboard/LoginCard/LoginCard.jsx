import { useEffect, useState }                    from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
//HookForm
import { useForm }                   from "react-hook-form";
import { workSpaceSlice, authSlice } from "store/Slices";
//Yup
import * as Yup        from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


//Own components
import { genericApi }                       from "store/api/genericApi";
import { LoginNotification, PostingConfig } from "Notifications";
import { TextInput, PasswordInput, Button } from "core/components";
import "./LoginCard.scss";
import { convertToObject, isValidArray }    from "helpers";

const schema = Yup.object().shape({
	username : Yup.string().required("El campo es obligatorio"),
	password : Yup.string().required("El campo es obligatorio"),
});

const { useLazyGetDataQuery } = genericApi;

const LoginCard = () => {
	const dispatch = useDispatch();

	const userToken = useSelector((state) => state.authSlice.token, shallowEqual);

	const [loginMutation, loginMutationResult] = genericApi.useSubmitDataMutation();
	const [ loading, setLoading ] = useState(false);

	const searchParams = new URLSearchParams(location.search);

	const nameUser = searchParams.get("username") ?? "";
	const postId = searchParams.get("postId") ?? "";

	const [dataMutation] = genericApi.useSubmitDataMutation();

	const [ fetchData ] = useLazyGetDataQuery();

	const {
		setError,
		register,
		handleSubmit,
		formState: {errors},
	} = useForm({
		resolver : yupResolver(schema),
	});

	const createPresetPhotoBook = async (photoBookPostId) => {
		const photoBookMetaData = photoBookPostId?.meta;
		//WhiteList of sizes and formats
		const whiteListOfSizes = ["chico", "mediano", "grande"];
		const whiteListOfFormats = ["horizontal", "vertical", "cuadrado"];

		const getFormatAndSize = () => {
			const formatAndSize = {
				format : "vertical", //default value,
				size   : "grande", //default value,
			};

			if (photoBookMetaData && photoBookMetaData?.tamano) {
				const parseLowerCaseNameSize = photoBookMetaData?.tamano.toLowerCase();
				const sizeFound = whiteListOfSizes.find(word => parseLowerCaseNameSize.includes(word));
				const formatFound = whiteListOfFormats.find(word => parseLowerCaseNameSize.includes(word));

				if (sizeFound && (sizeFound === "chico")) {
					formatAndSize.size = sizeFound;
					formatAndSize.format = "cuadrado";
				}

				if (sizeFound && formatFound) {
					formatAndSize.size = sizeFound;
					formatAndSize.format = formatFound;
				}
			}

			return formatAndSize;
		};

		const regexMatchDimenssions = /\(\d+x\d+cm\)/;

		const foundDimessions = () => {
			let dimenssions = "30x35cm";

			const foundDimenssion = photoBookMetaData?.tamano.match(regexMatchDimenssions);

			if (foundDimenssion[0]) {
				dimenssions = foundDimenssion[0];
			}

			return dimenssions;
		};

		const parseModel = photoBookMetaData?.modelo.toUpperCase();

		const model = photoBookMetaData?.modelo ? parseModel.replace("PHOTOBOOK", "").replace(" ", "").replace(" ", "").toLowerCase() : "white";
		const productName = photoBookMetaData?.modelo ?? "WHITE PHOTOBOOK";
		const size = getFormatAndSize().size;
		const format =  getFormatAndSize().format;
		const dimentions = foundDimessions();
		const pasta = photoBookMetaData?.pasta ?? "";
		const bound = photoBookMetaData?.encuadernado ?? "";
		const price = photoBookMetaData?.precio_total?.replace("$", "") ?? "0";
		const numberOfPages = photoBookMetaData?.numero_de_paginas ? Number(photoBookMetaData?.numero_de_paginas) : 40;

		const configPhotoBookData = {
			sizePhotoBook : size,
			dimentions,
			product       : model,
			productName,
			format,
			frontPage     : {
				id     : "FrontLayout",
				text   : {},
				sheet1 : {
					layoutType : "",
					text       : {},
					photos     : {
						"0" : {
							id  : "",
							url : "",
						},
					},
				},
			},
			numberOfPages,
			minPages      : 40,
			maxPages      : numberOfPages,
			currentPage   : "page1",
			basePrice     : price.replace(" ", ""),
			bound,
			pasta,
			maxRangePages : numberOfPages,
			pages         : {},
		};

		const totalPaginations = (numberOfPages - 1) / 2;

		const isEvenPages = totalPaginations % 2 === 0;

		const arrayGeneratorPages = Array(isEvenPages ? totalPaginations : (numberOfPages / 2) + 1).fill(0);

		const listOfPages = arrayGeneratorPages.map((page, index) => {
			if (index === 0) {
				return ({
					id     : "page1",
					sheet1 : {
						pageNo     : 1,
						layoutType : "",
						text       : "",
						photos     : {
							0 : {
								id  : "",
								url : "",
							},
						},
					},
				});
			}
			if ((index === arrayGeneratorPages.length - 1) && !isEvenPages) {
				return ({
					id     : `page${index + 1}`,
					sheet1 : {
						pageNo     : numberOfPages,
						layoutType : "",
						text       : {},
						photos     : {
							0 : {
								id  : "",
								url : "",
							},
						},
					},
				});
			}
			return ({
				id     : `page${index + 1}`,
				sheet1 : {
					pageNo     : index * 2,
					layoutType : "",
					text       : {},
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
					},
				},
				sheet2 : {
					pageNo     : (index * 2) + 1,
					layoutType : "",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
					},
				},
			});
		});

		configPhotoBookData.pages = convertToObject(listOfPages);

		const parseSendData = (data) => {
			const myData = data;
			const stringData = JSON.stringify(myData);
			const myReplacerString = stringData.replace(/"/g, "'");
			return myReplacerString;
		};

		try {
			await dataMutation({
				module : "wp-json/wp/v2/photobook-2-0",
				data   : {
					tittle : "Texto de prueba",
					status : "publish",
					meta   : {
						config : parseSendData({...configPhotoBookData, modified : photoBookPostId?.modified ?? undefined}),
					},
				},
				id     : postId,
				method : "POST",
			});

			dispatch(workSpaceSlice.actions.insertData({...configPhotoBookData, modified : photoBookPostId?.modified ?? undefined}));
			dispatch(authSlice.actions.setIsLoggedIn());
			dispatch(workSpaceSlice.actions.changeLoading(false));
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	};

	const parseAndInserPhotoBookConfig = (photoBookConfigData) => {
		const myData = photoBookConfigData?.meta?.config;
		const myReplacerString = myData.replace(/'/g, "\"");
		const parseJSON = JSON.parse(myReplacerString);
		dispatch(workSpaceSlice.actions.insertData({...parseJSON, modified : photoBookConfigData?.modified ?? undefined}));
	};

	const handlerAvailablePhotoBookConfig = async () => {
		try {
			const getPostPhotoBook = await fetchData({
				module : `wp-json/wp/v2/photobook-2-0/${postId}`,
			}).unwrap();

			const photoBookMeta = getPostPhotoBook?.meta;

			if (!photoBookMeta) throw new Error("Ocurrio un problema, el metadato no existe o presenta algun conflicto");

			const isAvailableConfigPhotoBook = photoBookMeta?.config && (photoBookMeta?.config !== "");

			if (isAvailableConfigPhotoBook) {
				parseAndInserPhotoBookConfig(getPostPhotoBook);
				dispatch(authSlice.actions.setIsLoggedIn());
				dispatch(workSpaceSlice.actions.changeLoading(false));
				return;
			}

			createPresetPhotoBook(getPostPhotoBook);
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	};

	const reactToLogin = async () => {
		if (loginMutationResult.isUninitialized) return;

		if (loginMutationResult.isError) {
			const status = loginMutationResult.error?.status;

			switch (status) {
				case 400:
					setError("password");
					setError("username");
					LoginNotification["post"][400]();
					setLoading(false);
					break;
				case 401:
					setError("password");
					setError("username");
					LoginNotification["post"][401]();
					setLoading(false);
					break;
				case 404:
					setError("password");
					setError("username");
					LoginNotification["post"][404]();
					setLoading(false);
					break;
				case 403:
					setError("password");
					setError("username");
					LoginNotification["post"][403]();
					setLoading(false);
					break;
				default:
					break;
			}
		}

		if (loginMutationResult.data) {
			try {
				const getPostPhotoBook = await fetchData({
					module : `wp-json/wp/v2/photobook-2-0/${postId}`,
				}).unwrap();

				if (!postId || isValidArray(getPostPhotoBook)) {
					const error = new Error ();
					error.code = 404;
					error.message = "PostId Not Found";
					throw error;
				}

				const haveAccessElement = getPostPhotoBook.meta?.correo_del_autor === loginMutationResult.data?.user_email;


				if (!haveAccessElement) throw new Error("You do not have access for this element");

				dispatch(authSlice.actions.setUserData({
					...loginMutationResult.data,
					postId : getPostPhotoBook?.id ?? undefined,
					userId : loginMutationResult?.data?.userId ?? undefined,
				}));

			} catch (error) {
				console.error(error);
				if (error.message === "PostId Not Found") {
					PostingConfig["get"][404]();
				}
				setLoading(false);
			}
		}
	};

	useEffect(() => void reactToLogin(), [loginMutationResult]);

	useEffect(() => {
		if (userToken && (userToken !== "")) {
			handlerAvailablePhotoBookConfig();
			return;
		}
		dispatch(authSlice.actions.clearUserData());
		return;
	}, [userToken]);


	const handleSubmitForm = (...args) => {
		setLoading(true);
		handleSubmit( async (data) => {
			await loginMutation({module : "wp-json/jwt-auth/v1/token", data : data}).unwrap();
		})(...args);
	};

	return (
		<form id="LoginCard" className="login-card-body" onSubmit={handleSubmitForm}>
			<h4>Inicio de Sesión</h4>
			<div className="form-container">
				<TextInput
					isLoading={loading}
					error={errors.username ? true : false}
					label="CORREO ELECTRÓNICO"
					variant="filled"
					placeholder="correo_electrónico@email.com"
					name="username"
					defaultValue={nameUser}
					register={register("username")}
				/>
				<PasswordInput
					isLoading={loading}
					error={errors.password ? true : false}
					placeholder="••••••••••••"
					label="CONTRASEÑA"
					variant="filled"
					name="password"
					register={register("password")}
				/>
			</div>
			<Button isLoading={loading} typeButton="submit" type="subtleActive" fontSize={20}>
				<div style={{marginLeft : "25px", marginRight : "25px"}}>
					{
						!loading ? "Iniciar Sesión" : "Cargando..."
					}
				</div>
			</Button>
		</form>
	);
};

export default (LoginCard);
