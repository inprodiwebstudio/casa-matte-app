import { Stack } from "@mantine/core";

import LoadingWithLogo from "./LoadingWithLogo";

import MessageCharge from "./MessageCharge";

import { Navigate, useNavigate } from "react-router";

import isValidPath from "./helpers/isValidPath";

import { genericApi }  from "store/api/genericApi";
import { getParamURL } from "helpers";
import { useEffect }   from "react";

const { useLazyGetDataQuery } = genericApi;

const AuthLoadValidate = () => {
	const navigate = useNavigate();
	const userId = getParamURL("userId");

	const validPath = isValidPath();

	const [ getData ] = useLazyGetDataQuery();

	const getUserData = async () => {
		try {
			const respUserData = await getData({ module : `wp-json/wp/v2/users/${userId}` }).unwrap();
			return respUserData;
		} catch (error) {
			if ((error.status === 500) || (error.status === "FETCH_ERROR")) {
				navigate("/error/500");
			}
			if (error.status === 404) {
				navigate("/error/404");
			}
		}
	};

	if (!validPath) {
		return <Navigate to="/error/404" replace />;
	}

	useEffect(() => {
		getUserData();
	}, []);

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
