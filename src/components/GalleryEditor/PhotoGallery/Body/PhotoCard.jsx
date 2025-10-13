import { Stack, ActionIcon, Badge, Center } from "@mantine/core";
import { MoonLoader }                       from "react-spinners";
import { useEffect, useState }              from "react";
import { changeResolutionImgUrl }           from "helpers/Functions/changeResolutionImgUrl";
import { FaRegTrashCan, FaCheck }           from "react-icons/fa6";

import styles             from "./styles";
import { useDispatch }    from "react-redux";
import { workSpaceSlice } from "store/Slices";


const PhotoCard = ({
	h,
	id,
	pixels,
	urlImage,
	isInUsePhoto,
}) => {
	const { classes } = styles();
	const dispatch = useDispatch();

	const [ myImageUrl, setMyImageUrl ] = useState(undefined);
	const [ isDragger, setIsDragger ] = useState(false);
	const loadImage = () => {
		const img = new Image();
		img.src = changeResolutionImgUrl(urlImage, { width : 300 }, 100);
		img.addEventListener("load", () => {
			setMyImageUrl(img.src);
		});
	};

	const handdleDrag = () => {
		setIsDragger(true);
		dispatch(workSpaceSlice.actions.setCurrentPhotoDrager(
			{
				image : urlImage,
				id,
				pixels,
			}
		));
	};

	const handleLeaveDragger = () => {
		dispatch(workSpaceSlice.actions.clearPhotoDrager());
		setIsDragger(false);
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
			draggable="true"
			className={classes.photoCardBody}
			align="center"
			justify="center"
			onDragStart={() => handdleDrag()}
			onDragEnd={() => handleLeaveDragger()}
		>
			{
				!myImageUrl && (<MoonLoader size={18} />)
			}
			{
				(myImageUrl && !isDragger) && (
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
