//Own components
import { TextInput, PasswordInput, Button } from "core/components";
import "./LoginCard.scss";

const LoginCard = () => {
	return (
		<div id="LoginCard" className="login-card-body">
			<h4>Inicio de Sesión</h4>
			<div className="form-container">
				<TextInput label="CORREO ELECTRÓNICO" variant="filled" placeholder="correo_electrónico@email.com" />
				<PasswordInput placeholder="••••••••••••" label="CONTRASEÑA" variant="filled" />
			</div>
			<Button type="subtleActive" fontSize={20}>
				<div style={{marginLeft : "25px", marginRight : "25px"}}>
					Iniciar Sesión
				</div>
			</Button>
			<a href="https://example.com">CREAR UNA CUENTA</a>
		</div>
	);
};

export default LoginCard;
