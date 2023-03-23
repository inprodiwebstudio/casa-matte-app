import { useEffect } from "react";
//HookForm
import { useForm } from "react-hook-form";
//Yup
import * as Yup        from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


//Own components
import { genericApi }                       from "store/api/genericApi";
import { TextInput, PasswordInput, Button } from "core/components";
import "./LoginCard.scss";

const schema = Yup.object().shape({
	username : Yup.string().required("El campo es obligatorio"),
	password : Yup.string().required("El campo es obligatorio"),
});

const LoginCard = () => {
	const [loginMutation, loginMutationResult] = genericApi.useSubmitDataMutation();

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
					break;
				case 401:
					setError("password");
					setError("username");
					break;
				case 404:
					setError("password");
					setError("username");
					break;
				case 403:
					setError("password");
					setError("username");
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
		})(...args);
	};

	return (
		<form id="LoginCard" className="login-card-body" onSubmit={handleSubmitForm}>
			<h4>Inicio de Sesión</h4>
			<div className="form-container">
				<TextInput
					error={errors.username ? true : false}
					label="CORREO ELECTRÓNICO"
					variant="filled"
					placeholder="correo_electrónico@email.com"
					name="username"
					register={register("username")}
				/>
				<PasswordInput
					error={errors.password ? true : false}
					placeholder="••••••••••••"
					label="CONTRASEÑA"
					variant="filled"
					name="password"
					register={register("password")}
				/>
			</div>
			<Button typeButton="submit" type="subtleActive" fontSize={20}>
				<div style={{marginLeft : "25px", marginRight : "25px"}}>
					Iniciar Sesión
				</div>
			</Button>
			<a href="https://example.com">CREAR UNA CUENTA</a>
		</form>
	);
};

export default LoginCard;
