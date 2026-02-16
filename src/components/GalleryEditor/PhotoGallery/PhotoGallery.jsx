import { Button, Center, Stack } from "@mantine/core";

import TabSelector          from "./TabSelector";
import FilterBar            from "./FilterBar";
import ProgressBarUploading from "./PrgressBarUploading";
import Body                 from "./Body";
import DropFolder           from "../DropFolder";

import { shallowEqual, useSelector } from "react-redux";
import { isValidArray }              from "helpers";
import { FaRegTrashCan }             from "react-icons/fa6";

const PhotoGallery = () => {
	const dropFilesPhotos = useSelector((state) => state.gallerySlice.filesDrop, shallowEqual);
	const typeDropedView = useSelector((state) => state.gallerySlice.typeDropedView, shallowEqual);
	const typeViewList = useSelector((state) => state.gallerySlice.typeViewList, shallowEqual);

	const isAvailableDropPhotos = isValidArray(dropFilesPhotos);

	return (
		<Stack
			h="100%"
			w="100%"
		>
			<Center>
				<TabSelector />
			</Center>
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
				>
					Eliminar Fotos
				</Button>
			</Center>
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
