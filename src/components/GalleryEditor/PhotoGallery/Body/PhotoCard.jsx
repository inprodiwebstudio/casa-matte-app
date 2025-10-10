import { Stack }               from "@mantine/core";
import { MoonLoader }          from "react-spinners";
import { useEffect, useState } from "react";
import { resizerImage }        from "helpers";

const PhotoCard = ({
	h,
	urlImage,
}) => {
	const [loadingPhoto, setLoadingPhoto] = useState(true);
	const [ myImageUrl, setMyImageUrl ] = useState(undefined);
	const loadImage = () => {
		const img = new Image();
		img.src = resizerImage(urlImage);
		img.addEventListener("load", setLoadingPhoto(false));
		setMyImageUrl(img.src);
	};

	useEffect(() => {
		if (urlImage) loadImage();
	}, [urlImage]);

	return (
		<Stack
			w="100%"
			h={h ?? "100%"}
			style={{
				...((!loadingPhoto) && {background : "url(\"" + myImageUrl + "\") center center / cover no-repeat"}),
				...(loadingPhoto && {background : "#f6f6f6"}),
				userSelect : "none",
				cursor     : "grab",
			}}
			align="center"
			justify="center"
		>
			{
				loadingPhoto && <MoonLoader size={18} />
			}
		</Stack>
	);
};

export default PhotoCard;
