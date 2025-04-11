import { Center } from "@mantine/core";

import "./AuthTokenValidate.scss";

import { AuthLoadValidate } from "components/authTokenValidate";


const AuthTokenValidate = () => {
	return (
		<Center
			h="100vh"
			className="AuthTokenValidate"
		>

			<AuthLoadValidate />
		</Center>
	);
};
export default AuthTokenValidate;
