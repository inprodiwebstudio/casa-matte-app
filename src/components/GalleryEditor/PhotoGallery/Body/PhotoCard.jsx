import { Stack, ActionIcon, Badge, Center } from "@mantine/core";
import { MoonLoader }                       from "react-spinners";
import { useEffect, useState }              from "react";
import { changeResolutionImgUrl }           from "helpers/Functions/changeResolutionImgUrl";
import { FaRegTrashCan, FaCheck }           from "react-icons/fa6";

import styles from "./styles";


const PhotoCard = ({
	h,
	urlImage,
	isInUsePhoto,
}) => {
	const { classes } = styles();

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
			}}
			className={classes.photoCardBody}
			align="center"
			justify="center"
		>
			{
				!myImageUrl && (<MoonLoader size={18} />)
			}
			{
				myImageUrl && (
					<>
						<ActionIcon
							color="red"
							radius="xl"
							variant="light"
							size="md"
							className="trashAction"
						>
							<FaRegTrashCan size={14} />
						</ActionIcon>
						{
							isInUsePhoto && (
								<Badge
									variant="filled"
									color="blue"
									radius="50%"
									h="28px"
									w="28px"
									p="0px"
									m="0px"
									className="checkBadge"
								>
									<Center
										h="100%"
										w="100%"
									>
										<FaCheck size={13} />
									</Center>
								</Badge>
							)
						}
					</>
				)
			}
		</Stack>
	);
};

export default PhotoCard;
