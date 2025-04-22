import { Stack } from "@mantine/core";

import LoadingWithLogo from "./LoadingWithLogo";

import MessageCharge from "./MessageCharge";

import { authSlice } from "store/Slices";

import { Navigate, useNavigate } from "react-router";

import isValidPath from "./helpers/isValidPath";

import { genericApi }  from "store/api/genericApi";
import { getParamURL } from "helpers";
import { useEffect }   from "react";
import { useDispatch } from "react-redux";

const { useLazyGetDataQuery } = genericApi;

const AuthLoadValidate = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userId = getParamURL("userId");
	const postId = getParamURL("postId");


	const validPath = isValidPath();

	const [ getData ] = useLazyGetDataQuery();

	const getUserData = async () => {
		try {
			const respUserData = await getData({ module : `wp-json/wp/v2/users/${userId}` }).unwrap();
			dispatch(authSlice.actions.setUserData({
				username : respUserData?.name ?? undefined,
				userId   : respUserData?.id ?? undefined,
			}));
			dispatch(authSlice.actions.setIsLoggedIn());
			navigate(`/dashboard/${postId}`);
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
