import { Stack } from "@mantine/core";

import LoadingWithLogo from "./LoadingWithLogo";

import MessageCharge from "./MessageCharge";

import { getParamURL } from "helpers";
import { useNavigate } from "react-router";
import { useEffect }   from "react";


const AuthLoadValidate = () => {
	const token = getParamURL("token");
	const postId = getParamURL("postId");

	const navigate = useNavigate();

	useEffect(() => {
		if (!token || !postId) {
			navigate("/404");
		}
	}, [token, postId]);

	return (
		<Stack
			align="center"
			p={40}
		>
			<LoadingWithLogo />
			<MessageCharge />
		</Stack>
	);
};

export default AuthLoadValidate;
