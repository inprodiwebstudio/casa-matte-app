import { Stack, ActionIcon, Badge, Center } from "@mantine/core";
import { MoonLoader }                       from "react-spinners";
import { useEffect, useState }              from "react";
import { changeResolutionImgUrl }           from "helpers/Functions/changeResolutionImgUrl";
import { FaRegTrashCan, FaCheck }           from "react-icons/fa6";

import styles                               from "./styles";
import { useDispatch }                      from "react-redux";
import { gallerySlice, workSpaceSlice }     from "store/Slices";
import { closeAllModals, openContextModal } from "@mantine/modals";
import { apiImageKit }                      from "store/api/imageKitApi";


const PhotoCard = ({
	h,
	id,
	pixels,
	urlImage,
	isInUsePhoto,
	publicId,
}) => {
	const { classes } = styles();
	const dispatch = useDispatch();

	const [ myImageUrl, setMyImageUrl ] = useState(undefined);
	const [ isDragger, setIsDragger ] = useState(false);

	const [galleryImagesMutastionDelete] = apiImageKit.useDeleteImagesMutation();

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

	const handlerDeletePhotos = async () => {
		dispatch(gallerySlice.actions.setLoadingMutationGallery(true));
		try {
			await galleryImagesMutastionDelete([publicId]);
			dispatch(workSpaceSlice.actions.removePhotosDeleted({imagesIds : [id]}));
			dispatch(gallerySlice.actions.deleteDataGallery({[id] : [id]}));
			dispatch(gallerySlice.actions.setLoadingMutationGallery(false));
			closeAllModals();
		} catch (error) {
			dispatch(gallerySlice.actions.setLoadingMutationGallery(false));
			closeAllModals();
			console.error(error);
		}
	};

	const onDeletePhoto = () => {
		openContextModal({
			modal               : "confirmationDeletePhoto",
			closeOnClickOutside : false,
			innerProps          : {
				actionDelete : () => handlerDeletePhotos(),
			},
		});
	};

	const handleLeaveDragger = () => {
		dispatch(workSpaceSlice.actions.clearPhotoDrager());
		setIsDragger(false);
	};

	useEffect(() => {
		if (!urlImage) return;

		let isMounted = true;
		const img = new Image();
		const newUrl = changeResolutionImgUrl(urlImage, { width : 300 }, 100);

		setMyImageUrl(undefined);

		img.src = newUrl;
		img.addEventListener("load", () => {
			if (isMounted) setMyImageUrl(newUrl);
		});

		return () => {
			isMounted = false;
			img.src = "";
		};
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
							onClick={onDeletePhoto}
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
