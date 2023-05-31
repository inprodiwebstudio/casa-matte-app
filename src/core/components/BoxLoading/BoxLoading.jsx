import React from "react";
//Mantine
import { Skeleton } from "@mantine/core";

const BoxLoading = ({width, height}) => {
	return (
		<Skeleton sx={{borderRadius : "0px"}} width={width} height={height} />
	);
};

export default BoxLoading;
