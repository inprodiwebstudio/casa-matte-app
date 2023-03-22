//Own components
import { TextInput, PasswordInput, Button } from "core/components";
import "./LoginCard.scss";

const LoginCard = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Submit Data");
	};
	return (
		<form id="LoginCard" className="login-card-body" onSubmit={(e) => handleSubmit(e)}>
			<h4>Inicio de Sesión</h4>
			<div className="form-container">
				<TextInput
					error={true}
					label="CORREO ELECTRÓNICO"
					variant="filled"
					placeholder="correo_electrónico@email.com"
				/>
				<PasswordInput
					error={true}
					placeholder="••••••••••••"
					label="CONTRASEÑA"
					variant="filled"
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
