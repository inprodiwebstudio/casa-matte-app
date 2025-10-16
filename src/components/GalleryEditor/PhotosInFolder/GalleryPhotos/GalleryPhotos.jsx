import { Stack }                                  from "@mantine/core";
import ActionsBar                                 from "./ActionsBar";
import DataGridPhotos                             from "./DataGridPhotos";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { gallerySlice }                           from "store/Slices";
import useSubmitImages                            from "helpers/Hooks/useSubmitImages";
import { isValidArray }                           from "helpers";
import ProgressBarUploading                       from "components/GalleryEditor/PhotoGallery/PrgressBarUploading";
import { useParams }                              from "react-router";
import { cleanNotifications, showNotification }   from "@mantine/notifications";
import { useEffect }                              from "react";

const GalleryPhotos = () => {
	const dispatch = useDispatch();

	const { postId } = useParams();

	const dropFilesPhotos = useSelector((state) => state.gallerySlice.filesDrop, shallowEqual);
	const filesDrop = useSelector((state) => state.gallerySlice.filesDrop, shallowEqual);
	const userName = useSelector((state) => state.authSlice?.user?.username, shallowEqual);
	const folderName = useSelector((state) => state.gallerySlice?.galleryPathName?.name, shallowEqual);

	const { handlerUploadImage } = useSubmitImages({userName : `${userName}/${postId}`, folderName : folderName ?? undefined});
	const isAvailableDropPhotos = isValidArray(dropFilesPhotos);

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
