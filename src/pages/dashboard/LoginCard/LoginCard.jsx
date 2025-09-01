import { useState }    from "react";
import { useDispatch } from "react-redux";

import { authSlice } from "store/Slices";
//HookForm
import { useForm } from "react-hook-form";
//Yup
import * as Yup        from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


//Own components
import { genericApi }                                  from "store/api/genericApi";
import { TextInput, PasswordInput, Button, BlankPage } from "core/components";
import "./LoginCard.scss";
import { Center, useMantineTheme }                     from "@mantine/core";
import { showNotification }                            from "@mantine/notifications";
// import { useNavigate }                      from "react-router";

const schema = Yup.object().shape({
	username : Yup.string().required("El campo es obligatorio"),
	password : Yup.string().required("El campo es obligatorio"),
});

const { useLazyGetDataQuery } = genericApi;

const LoginCard = () => {
	const dispatch = useDispatch();
	const theme = useMantineTheme();

	const [ loading, setLoading ] = useState(false);

	const [ fetchData ] = useLazyGetDataQuery();

	const {
		setError,
		register,
		handleSubmit,
		formState: {errors},
	} = useForm({
		resolver : yupResolver(schema),
	});

	const handleSubmitForm = (...args) => {
		setLoading(true);
		handleSubmit( async (data) => {
			const adminEmail = "info@casamatte.com";
			const devEmail = "demo44@demo.com";

			const passwordAdmin = "admin_casamatte025";

			const currentEmail = data.username.trim();
			const currentPassword = data.password;

			const isValidEmail = (currentEmail === adminEmail) || (currentEmail === devEmail);

			if (!isValidEmail || (currentPassword !== passwordAdmin)) {
				setError("username");
				setError("password");
				if (currentEmail !== adminEmail) {
					showNotification({
						title   : "Error al iniciar sesión",
						message : "El correo es incorrecto",
						color   : "red",
						styles  : () => ({
							root : {
										  "&::before" : {
											  borderRadius : "0px",
											  width        : "3px",
										  },
										  borderRadius : "0px",
							},

							title       : { fontFamily : "Helvetica", fontWeight : "500", textTransform : "uppercase" },
							description : { fontFamily : "Helvetica" },
						}),
					});
				}
				if (currentPassword !== passwordAdmin) {
					showNotification({
						title   : "Error al iniciar sesión",
						message : "La contraseña es incorrecta",
						color   : "red",
						styles  : () => ({
							root : {
										  "&::before" : {
											  borderRadius : "0px",
											  width        : "3px",
										  },
										  borderRadius : "0px",
							},

							title       : { fontFamily : "Helvetica", fontWeight : "500", textTransform : "uppercase" },
							description : { fontFamily : "Helvetica" },
						}),
					});
				}
				setLoading(false);
				return;
			}

			const userName = (currentEmail === adminEmail) ? "casamatteadmin" : "demo";

			try {
				const userData = await fetchData({ module : `wp-json/wp/v2/users?slug=${userName}`}).unwrap();

				dispatch(authSlice.actions.setUserData({
					username : userData[0]?.name ?? undefined,
					userId   : userData[0]?.id ?? undefined,
				}));
				dispatch(authSlice.actions.setIsLoggedIn());
				setLoading(false);
			} catch (err) {
				setLoading(false);
				showNotification({
					title   : "Error al iniciar sesión",
					message : "Ocurrió un error al iniciar sesión. Intenta mas tarde",
					color   : "red",
					styles  : () => ({
						root : {
										  "&::before" : {
											  borderRadius : "0px",
											  width        : "3px",
										  },
										  borderRadius : "0px",
						},

						title       : { fontFamily : "Helvetica", fontWeight : "500", textTransform : "uppercase" },
						description : { fontFamily : "Helvetica" },
					}),
				});
			}
		})(...args);
	};

	return (
		<BlankPage
			backgroundColor={theme.colors.whiteCasaMatte[8]}
		>
			<Center
				h="100vh"
			>
				<form id="LoginCard" className="login-card-body" onSubmit={handleSubmitForm}>
					<h4>Inicio de Sesión</h4>
					<div className="deescription-text-login">Ingresa con tu cuenta de administrador</div>
					<div className="form-container">
						<TextInput
							isLoading={loading}
							error={errors.username ? true : false}
							label="CORREO"
							variant="filled"
							placeholder="correo_electrónico@email.com"
							name="username"
							register={register("username")}
						/>
						<PasswordInput
							isLoading={loading}
							error={errors.password ? true : false}
							label="CONTRASEÑA"
							variant="filled"
							name="password"
							register={register("password")}
						/>
					</div>
					<Button
						isLoading={loading}
						typeButton="submit"
						type="subtleActive"
						fontSize={20}
					>
						<div style={{marginLeft : "25px", marginRight : "25px"}}>
							{
								!loading ? "Iniciar Sesión" : "Cargando..."
							}
						</div>
					</Button>
				</form>
			</Center>
		</BlankPage>
	);
};

export default (LoginCard);
