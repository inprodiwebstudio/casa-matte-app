import { Center } from "@mantine/core";

import { AuthLoadValidate } from "components/authValidate";

import { BlankPage } from "core/components";


const AuthTokenValidate = () => {
	return (
		<BlankPage>
			<Center h="100%">
				<AuthLoadValidate />
			</Center>
		</BlankPage>
	);
};
export default AuthTokenValidate;
