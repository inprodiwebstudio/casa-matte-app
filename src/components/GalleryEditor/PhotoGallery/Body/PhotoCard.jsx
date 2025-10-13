import { Stack }                  from "@mantine/core";
import { MoonLoader }             from "react-spinners";
import { useEffect, useState }    from "react";
import { changeResolutionImgUrl } from "helpers/Functions/changeResolutionImgUrl";

const PhotoCard = ({
	h,
	urlImage,
}) => {
	const [ myImageUrl, setMyImageUrl ] = useState(undefined);
	const loadImage = () => {
		const img = new Image();
		img.src = changeResolutionImgUrl(urlImage, { width : 300 }, 100);
		img.addEventListener("load", () => {
			setMyImageUrl(img.src);
		});
	};

	useEffect(() => {
		if (urlImage) {
			loadImage();
		}
	}, [urlImage]);

	return (
		<Stack
			w="100%"
			h={h ?? "100%"}
			style={{
				...((myImageUrl) && {background : "url(\"" + myImageUrl + "\") center center / cover no-repeat"}),
				...(!myImageUrl && {background : "#f6f6f6"}),
				userSelect : "none",
				cursor     : "grab",
			}}
			align="center"
			justify="center"
		>
			{
				!myImageUrl && (<MoonLoader size={18} />)
			}
		</Stack>
	);
};

export default PhotoCard;
