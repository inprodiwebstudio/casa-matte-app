import { useEffect, useState } from "react";
//HookForm
import { useForm } from "react-hook-form";
//Yup
import * as Yup        from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


//Own components
import { genericApi }                       from "store/api/genericApi";
import { LoginNotification }                from "Notifications";
import { TextInput, PasswordInput, Button } from "core/components";
import "./LoginCard.scss";

const schema = Yup.object().shape({
	username : Yup.string().required("El campo es obligatorio"),
	password : Yup.string().required("El campo es obligatorio"),
});

const { useLazyGetDataQuery } = genericApi;

const LoginCard = () => {
	const [loginMutation, loginMutationResult] = genericApi.useSubmitDataMutation();
	const [ loading, setLoading ] = useState(false);

	const searchParams = new URLSearchParams(location.search);

	const nameUser = searchParams.get("username") ?? "";
	const postId = searchParams.get("postId") ?? "";

	const [ fetchData ] = useLazyGetDataQuery();

	const {
		setError,
		register,
		handleSubmit,
		formState: {errors},
	} = useForm({
		resolver : yupResolver(schema),
	});

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

				const haveAccessElement = getPostPhotoBook.meta?.correo_del_autor === loginMutationResult.data?.user_email;

				if (!haveAccessElement) throw new Error("You do not have access for this element");

				const configPhotoBook = getPostPhotoBook?.meta ?? {};

				//WhiteList of sizes and formats
				const whiteListOfSizes = ["chico", "mediano", "grande"];
				const whiteListOfFormats = ["horizontal", "vertical", "cuadrado"];

				const getFormatAndSize = () => {
					const formatAndSize = {
						format : "vertical", //default value,
						size   : "grande", //default value,
					};

					if (configPhotoBook && configPhotoBook?.tamano) {
						const parseLowerCaseNameSize = configPhotoBook?.tamano.toLowerCase();
						const sizeFound = whiteListOfSizes.find(word => parseLowerCaseNameSize.includes(word));
						const formatFound = whiteListOfFormats.find(word => parseLowerCaseNameSize.includes(word));

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

					const foundDimenssion = configPhotoBook?.tamano.match(regexMatchDimenssions);

					if (foundDimenssion[0]) {
						dimenssions = foundDimenssion[0];
					}

					return dimenssions;
				};

				const model = configPhotoBook?.modelo ?? "white";
				const size = getFormatAndSize().size;
				const format =  getFormatAndSize().format;
				const dimentions = foundDimessions();
				const pasta = configPhotoBook?.pasta ?? "";
				const bound = configPhotoBook?.encuadernado ?? "";
				const numberOfPages = configPhotoBook?.numero_de_paginas ? Number(configPhotoBook?.numero_de_paginas) : 40;

				console.log(format, size, dimentions);

				const isAvailableConfigPages = !!configPhotoBook?.config;

				console.log(isAvailableConfigPages);

				// const arrayGenerator = Array((numberOfPages + 2)/2).fill(0);

				// const listOfPages = arrayGenerator.map((e, index) => {
				// 	if (index === 0) {
				// 		return ({
				// 			id     : "page1",
				// 			sheet1 : {
				// 				pageNo     : 1,
				// 				layoutType : "",
				// 				text       : "",
				// 				photos     : {
				// 					0 : {
				// 						id  : "",
				// 						url : "",
				// 					},
				// 				},
				// 			},
				// 		});
				// 	}
				// 	if (index === numberOfPages / 2) {
				// 		return ({
				// 			id     : `page${index + 1}`,
				// 			sheet1 : {
				// 				pageNo     : numberOfPages,
				// 				layoutType : "",
				// 				text       : "",
				// 				photos     : {
				// 					0 : {
				// 						id  : "",
				// 						url : "",
				// 					},
				// 				},
				// 			},
				// 		});
				// 	}
				// 	return ({
				// 		id     : `page${index + 1}`,
				// 		sheet1 : {
				// 			pageNo     : index * 2,
				// 			layoutType : "",
				// 			text       : "",
				// 			photos     : {
				// 				0 : {
				// 					id  : "",
				// 					url : "",
				// 				},
				// 			},
				// 		},
				// 		sheet2 : {
				// 			pageNo     : (index * 2) + 1,
				// 			layoutType : "",
				// 			text       : "",
				// 			photos     : {
				// 				0 : {
				// 					id  : "",
				// 					url : "",
				// 				},
				// 			},
				// 		},
				// 	});
				// });

				// const myPhotoBookData = {
				// 	sizePhotoBook  : size,
				// 	sizeDimentions : dimentions,
				// 	pasta          : pasta,
				// 	frontPage      : {},
				// 	numberOfPages  : numberOfPages,
				// 	price          : 0,
				// 	bound          : bound,
				// 	pages          : convertToObject(listOfPages),
				// };

				// console.log(myPhotoBookData);
				// setLoading(false);
			} catch (error) {
				console.error(error);
				setLoading(false);
			}
			console.log("No es Suscriptor");
			return;
		}
	};

	useEffect(() => void reactToLogin(), [loginMutationResult]);

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
			<a href="https://example.com">CREAR UNA CUENTA</a>
		</form>
	);
};

export default (LoginCard);
