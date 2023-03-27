import { useEffect } from "react";
//HookForm
import { useForm } from "react-hook-form";
//Yup
import * as Yup        from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//Own components
import { convertToObject, isValidArray }    from "helpers";
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

	const qsData = location.search.split("&");

	const nameUser = qsData[0].split("=")[1];
	const orderId = qsData[1].split("=")[1];
	const productId = qsData[2].split("=")[1];

	const loading = loginMutationResult.isLoading;

	const [ fetchData ] = useLazyGetDataQuery();

	const {
		setError,
		register,
		handleSubmit,
		formState: {errors},
	} = useForm({
		resolver : yupResolver(schema),
	});

	const reactToLogin = () => {
		if (loginMutationResult.isUninitialized) return;

		if (loginMutationResult.isError) {
			const status = loginMutationResult.error?.status;

			switch (status) {
				case 400:
					setError("password");
					setError("username");
					LoginNotification["post"][400]();
					break;
				case 401:
					setError("password");
					setError("username");
					LoginNotification["post"][401]();
					break;
				case 404:
					setError("password");
					setError("username");
					LoginNotification["post"][404]();
					break;
				case 403:
					setError("password");
					setError("username");
					LoginNotification["post"][403]();
					break;
				default:
					break;
			}
		}
	};

	useEffect(() => void reactToLogin(), [loginMutationResult]);

	const handleSubmitForm = (...args) => {
		handleSubmit( async (data) => {
			await loginMutation({module : "wp-json/jwt-auth/v1/token", data : data}).unwrap();
			const getPostyPhotoBook = await fetchData({
				module : "wp-json/wp/v2/photobook",
				params : {
					meta_query : "photobook",
					meta_value : `${orderId}${productId}`,
					meta_key   : "id",
				},
			}).unwrap();
			if (isValidArray(getPostyPhotoBook)) {
				console.log(getPostyPhotoBook);
				return;
			}
			const getUserDetail =  await fetchData({
				module : "wp-json/wp/v2/users",
				params : {
					search : nameUser,
				},
			}).unwrap();
			const getUserWooComer = await fetchData({
				module : `wp-json/wc/v3/customers/${getUserDetail[0]?.id}`,
			}).unwrap();
			const isSuscriber = getUserWooComer?.meta_data?.find(meta => meta?.key === "suscripcion");
			if (isSuscriber) {
				if (isSuscriber?.value === "true") {
					const getOrder = await fetchData({
						module : `wp-json/wc/v3/orders/${orderId}`,
					}).unwrap();
					const finderProduct = getOrder?.line_items?.find(product => product?.id === Number(productId));
					if (finderProduct) {
						const size = "LargeFormat";
						const dimentions = "21x21";
						const pasta = "Suave";
						const bound = finderProduct?.meta_data[3]?.display_value ?? "NORMAL";
						const numberOfPages = 40;

						const arrayGenerator = Array((numberOfPages + 2)/2).fill(0);
						const listOfPages = arrayGenerator.map((e, index) => {
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
							if (index === numberOfPages / 2) {
								return ({
									id     : `page${index + 1}`,
									sheet1 : {
										pageNo     : numberOfPages,
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
							return ({
								id     : `page${index + 1}`,
								sheet1 : {
									pageNo     : index * 2,
									layoutType : "",
									text       : "",
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

						const myPhotoBookData = {
							sizePhotoBook  : size,
							sizeDimentions : dimentions,
							pasta          : pasta,
							frontPage      : {},
							numberOfPages  : numberOfPages,
							price          : 0,
							bound          : bound,
							pages          : convertToObject(listOfPages),
						};

						console.log(myPhotoBookData);
					}
				}
			}
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

export default LoginCard;
