import { Stack }       from "@mantine/core";
import TitleInpt       from "./TitleInpt";
import ActionsGroup    from "./ActionsGrouop";
import PhotoGallery    from "./PhotoGallery";
import { apiImageKit } from "store/api/imageKitApi";
import { useEffect }   from "react";

import DropPhotos from "./DropPhotos";

//Redux
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { gallerySlice }                           from "store/Slices";
import { isValidArray }                           from "helpers";
import useSubmitImages                            from "helpers/Hooks/useSubmitImages";
import { useParams }                              from "react-router";
import { cleanNotifications, showNotification }   from "@mantine/notifications";


const GalleryEditorView = () => {
	const dispatch = useDispatch();

	const { postId } = useParams();

	const typeDropedView = useSelector((state) => state.gallerySlice.typeDropedView, shallowEqual);
	const filesDrop = useSelector((state) => state.gallerySlice.filesDrop, shallowEqual);
	const userName = useSelector((state) => state.authSlice?.user?.username, shallowEqual);
	const folderName = useSelector((state) => state.gallerySlice?.folderName, shallowEqual);
	const folderId = useSelector((state) => state.gallerySlice?.folderId, shallowEqual);

	const { handlerUploadImage } = useSubmitImages({userName : `${userName}/${postId}`, folderName : folderName ?? undefined});
	const [galleryFolderMutation] = apiImageKit.useAddFolderMutation();

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
			if (folderName) {
				dispatch(gallerySlice.actions.setFolderName(null));
			}
			if (folderId) {
				dispatch(gallerySlice.actions.setFolderId(null));
			}
			dispatch(gallerySlice.actions.setFilesDrop([]));
			dispatch(gallerySlice.actions.clearPhotosUploaded());
		});
	};

	const uploadFolder = async () => {
		const respFolder = await galleryFolderMutation({
			data : {
				userName,
				postId,
				folderName,
			},
		});

		const constructorData = {
			...respFolder?.data,
			type       : "folder",
			id         : respFolder?.data?.path,
			thumbNails : [],
		};

		return constructorData;
	};

	useEffect(() => {
		if (folderName && !isValidArray(filesDrop)) {
			uploadFolder();
			return;
		}
		if (isValidArray(filesDrop)) {
			uploadPhotos();
			return;
		}
	}, [filesDrop, folderName]);

	return (
		<Stack
			spacing={10}
			h="100%"
		>
			<TitleInpt />
			<ActionsGroup
				w="290px"
				spacing="10px"
			/>
			{
				(typeDropedView !== "photos") && (
					<Stack
						style={{
							flex : 1,
						}}
						p={0}
						mt="10px"
					>
						<PhotoGallery />
					</Stack>
				)
			}
			{
				(typeDropedView === "photos") && (
					<DropPhotos />
				)
			}
		</Stack>
	);
};

export default GalleryEditorView;
