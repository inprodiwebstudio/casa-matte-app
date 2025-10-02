import { Stack } from "@mantine/core";
import React     from "react";

const PhotoCard = ({
	h,
	urlImage,
}) => {
	return (
		<Stack
			w="100%"
			h={h ?? "100%"}
			style={{
				backgroundImage    : `url(${urlImage})`,
				backgroundSize     : "cover",
				backgroundPosition : "center",
				backgroundRepeat   : "no-repeat",
				background         : "#f6f6f6",
				userSelect         : "none",
			}}
		>
            &nbsp;
		</Stack>
	);
};

export default PhotoCard;
