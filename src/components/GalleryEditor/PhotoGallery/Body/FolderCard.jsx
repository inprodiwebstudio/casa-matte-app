import { Stack, Badge, Text, Center, ActionIcon } from "@mantine/core";
import FillCircle                                 from "components/GalleryEditor/CradAction/FillCircle";
import { isValidArray }                           from "helpers";
import { changeResolutionImgUrl }                 from "helpers/Functions/changeResolutionImgUrl";
import { useDropzone }                            from "react-dropzone/.";
import { FaRegTrashCan }                          from "react-icons/fa6";
import { GoPlus }                                 from "react-icons/go";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { MoonLoader }                             from "react-spinners";
import { gallerySlice }                           from "store/Slices";

import styles from "./styles";


const FolderCard = ({
	w,
	h,
	urlImage,
	folderName,
	folderId,
}) => {
	const { classes } = styles();
	const dispatch = useDispatch();

	const handlerSubmitPhotos = (photosFiles) => {
		dispatch(gallerySlice.actions.setFolderName(folderName));
		dispatch(gallerySlice.actions.setFolderId(folderId));
		dispatch(gallerySlice.actions.setFilesDrop(photosFiles));
	};

	const folderIdDropedPhotos = useSelector((state) => state.gallerySlice.folderId, shallowEqual);
	const photosDrop = useSelector((state) => state.gallerySlice.filesDrop, shallowEqual);

	const isLoadingChargeNewPhotos = (folderIdDropedPhotos === folderId) && isValidArray(photosDrop);

	const { getInputProps, getRootProps } = useDropzone({
		multiple : true,
		onDrop   : (files) => handlerSubmitPhotos(files),
		accept   : {
			"image/*" : [],
		},
	});

	return (
		<Stack
			w={w ?? "100%"}
			h={h ?? "100%"}
			p={0}
			m={0}
			className={classes.folderCardBody}
			style={{
				...(urlImage && {
					background : "url(\"" + changeResolutionImgUrl(urlImage, { width : 200 }, 100) + "\") center center / cover no-repeat",
				}),
				...(!urlImage && {
					background : "#f6f6f6ff",
				}),
			}}
		>
			<Badge
				variant="filled"
				w="100%"
				className="badgeTitle"
			>
				<Text
					style={{
						fontFamily    : "Helvetica",
						letterSpacing : "0px",
						textTransform : "none",
						color         : "black",
					}}
				>
					{folderName ?? "Sin nombre"}
				</Text>
			</Badge>
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
				!urlImage && (
					<Center
						h="100%"
						w="100%"
						style={{
							cursor : "pointer",
						}}
						{...!isLoadingChargeNewPhotos && getRootProps()}
					>
						<Stack
							align="center"
							spacing={5}
						>
							{
								!isLoadingChargeNewPhotos ? (
									<>
										<FillCircle>
											<GoPlus size={13} />
										</FillCircle>
										<Text
											size="10px"
											color="black"
											weight={500}
											align="center"
											style={{
												fontFamily    : "Helvetica",
												letterSpacing : "0px",
												color         : "black",
											}}
										>
											Agregar Fotos
										</Text>
									</>
								) : (
									<MoonLoader size={18} />
								)
							}
						</Stack>
						{
							!isLoadingChargeNewPhotos && (<input {...getInputProps()} />)
						}
					</Center>
				)
			}
		</Stack>
	);
};

export default FolderCard;
