import { Button, Center, Stack } from "@mantine/core";

import TabSelector          from "./TabSelector";
import FilterBar            from "./FilterBar";
import ProgressBarUploading from "./PrgressBarUploading";
import Body                 from "./Body";
import DropFolder           from "../DropFolder";

import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { convertToArray, isValidArray }           from "helpers";
import { FaRegTrashCan }                          from "react-icons/fa6";
import { gallerySlice, workSpaceSlice }           from "store/Slices";
import { apiImageKit }                            from "store/api/imageKitApi";
import { closeAllModals, openContextModal }       from "@mantine/modals";
import { useEffect }                              from "react";

const PhotoGallery = () => {
	const dispatch = useDispatch();

	const dropFilesPhotos = useSelector((state) => state.gallerySlice.filesDrop, shallowEqual);
	const typeDropedView = useSelector((state) => state.gallerySlice.typeDropedView, shallowEqual);
	const typeViewList = useSelector((state) => state.gallerySlice.typeViewList, shallowEqual);
	const selectedPhotos = useSelector((state) => state.gallerySlice.selectedData, shallowEqual);


	const [galleryImagesMutastionDelete] = apiImageKit.useDeleteImagesMutation();


	const isAvailableDropPhotos = isValidArray(dropFilesPhotos);

	const availableDeletePhotos = convertToArray(selectedPhotos).length > 0;

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
		if (typeViewList === "folders") {
			dispatch(gallerySlice.actions.clearSelectedData());
		}
	}, [typeViewList]);

	return (
		<Stack
			h="100%"
			w="100%"
		>
			<Center>
				<TabSelector />
			</Center>
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
				<FilterBar />
			</Stack>
			{
				isAvailableDropPhotos && (
					<ProgressBarUploading />
				)
			}
			{
				((typeDropedView === "folders") && (typeViewList === "folders")) ? (
					<DropFolder />
				) : (
					<Body />
				)
			}
		</Stack>
	);
};

export default PhotoGallery;
