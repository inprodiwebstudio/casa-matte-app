import { Button, Center, Stack }                  from "@mantine/core";
import ActionsBar                                 from "./ActionsBar";
import DataGridPhotos                             from "./DataGridPhotos";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { gallerySlice, workSpaceSlice }           from "store/Slices";
import useSubmitImages                            from "helpers/Hooks/useSubmitImages";
import { convertToArray, isValidArray }           from "helpers";
import ProgressBarUploading                       from "components/GalleryEditor/PhotoGallery/PrgressBarUploading";
import { useParams }                              from "react-router";
import { cleanNotifications, showNotification }   from "@mantine/notifications";
import { useEffect }                              from "react";
import { FaRegTrashCan }                          from "react-icons/fa6";
import { closeAllModals, openContextModal }       from "@mantine/modals";
import { apiImageKit }                            from "store/api/imageKitApi";

const GalleryPhotos = () => {
	const dispatch = useDispatch();

	const { postId } = useParams();

	const dropFilesPhotos = useSelector((state) => state.gallerySlice.filesDrop, shallowEqual);
	const filesDrop = useSelector((state) => state.gallerySlice.filesDrop, shallowEqual);
	const userName = useSelector((state) => state.authSlice?.user?.username, shallowEqual);
	const folderName = useSelector((state) => state.gallerySlice?.galleryPathName?.name, shallowEqual);
	const selectedPhotos = useSelector((state) => state.gallerySlice.selectedData, shallowEqual);

	const [galleryImagesMutastionDelete] = apiImageKit.useDeleteImagesMutation();

	const { handlerUploadImage } = useSubmitImages({userName : `${userName}/${postId}`, folderName : folderName ?? undefined});
	const isAvailableDropPhotos = isValidArray(dropFilesPhotos);

	const availableDeletePhotos = convertToArray(selectedPhotos).length > 0;

	const uploadPhotos = () => {
		dispatch(gallerySlice.actions.setLoadingMutationGallery(true));

		const listOfPromises = filesDrop.map(async (file) => {
			try {
				const respImage = await handlerUploadImage(file);
				const constructorImageData = {
					...respImage,
					id       : respImage?.asset_id,
					fileId   : respImage?.asset_id,
					filePath : respImage?.public_id,
					type     : "file",
				};
				dispatch(gallerySlice.actions.setPhotosUploaded(constructorImageData));
				dispatch(gallerySlice.actions.setGalleryData(constructorImageData));
				return constructorImageData;
			} catch (error) {
				cleanNotifications();
				showNotification({
					title   : "Error al subir la imagen",
					message : `Ocurrió un problema al subir la imagen ${file.name}. Intenta más tarde.`,
					color   : "red",
					styles  : () => ({
						root : {
							"&::before" : {
									  borderRadius : "0px",
									  width        : "3px",
							},
							borderRadius : "0px",
						},
						title       : { fontFamily : "Helvetica", fontWeight : "500", textTransform : "uppercase" },
						description : { fontFamily : "Helvetica" },
					}),
				});
			}
		});

		Promise.allSettled([...listOfPromises]).then((imageValues) => {
			dispatch(gallerySlice.actions.setLoadingMutationGallery(false));
			dispatch(gallerySlice.actions.setFilesDrop([]));
			dispatch(gallerySlice.actions.clearPhotosUploaded());
		});
	};

	const handlerDeletePhotos = async () => {
		const listOfPhotos = convertToArray(selectedPhotos);
		const publicIds = listOfPhotos.map((image) => image?.publicId);
		const ids = listOfPhotos.map((image) => image?.id);

		dispatch(gallerySlice.actions.setLoadingMutationGallery(true));
		try {
			await galleryImagesMutastionDelete([...publicIds]);
			dispatch(workSpaceSlice.actions.removePhotosDeleted({imagesIds : [...ids]}));
			ids.forEach((id) => {
				dispatch(gallerySlice.actions.deleteDataGallery({[id] : [id]}));
			});
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

	useEffect(() => {
		if (isValidArray(filesDrop)) {
			uploadPhotos();
			return;
		}
	}, [filesDrop]);

	return (
		<Stack
			w="100%"
			h="100%"
		>
			{
				(availableDeletePhotos) && (
					<Center
						mt="-14px"
						mb="-14px"
					>
						<Button
							radius="lg"
							color="red"
							size="xs"
							mt="sm"
							variant="light"
							rightIcon={<FaRegTrashCan size={12} />}
							style={{
								fontSize : "10px",
							}}
							onClick={() => onDeletePhoto()}
						>
							Eliminar Fotos
						</Button>
					</Center>
				)
			}
			<Stack
				w="100%"
			>
				<ActionsBar />
			</Stack>
			{
				isAvailableDropPhotos && (
					<ProgressBarUploading />
				)
			}
			<Stack
				w="100%"
				align="center"
				style={{
					overflow : "hidden",
					flexGrow : 1,
				}}
			>
				<DataGridPhotos />
			</Stack>
		</Stack>
	);
};

export default GalleryPhotos;
