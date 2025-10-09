import { Button, Group, Progress, Stack, Text } from "@mantine/core";
import { IoIosCloseCircleOutline }              from "react-icons/io";


//Redux
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { gallerySlice }                           from "store/Slices";


const ProgressBarUploading = () => {
	const dispatch = useDispatch();

	const handlerCancelUploading = () => {
		dispatch(gallerySlice.actions.setFilesDrop([]));
	};

	const filesDrop = useSelector((state) => state.gallerySlice.filesDrop, shallowEqual);
	const photosUploaded = useSelector((state) => state.gallerySlice.photosUploaded, shallowEqual);

	const calcPercentage = () => {
		if (filesDrop.length > 0) {
			return Math.round((photosUploaded.length / filesDrop.length) * 100);
		}
		return 0;
	};

	return (
		<Stack
			w="100%"
			spacing={"2px"}
		>
			<Progress
				color="blue"
				value={calcPercentage()}
				size="sm"
				radius="xl"
				animate
			/>
			<Group
				position="apart"
			>
				<Text
					size="10px"
					color="black"
					weight={500}
					style={{
						fontFamily    : "Helvetica",
						letterSpacing : "0px",
						color         : "black",
					}}
				>
					Cargando fotos : {calcPercentage()}%
				</Text>
				<Button
					size="xs"
					radius="xl"
					h="20px"
					onClick={handlerCancelUploading}
				>
					<Group
						spacing="2px"
					>
						<Text
							size="10px"
							weight={500}
							style={{
								fontFamily    : "Helvetica",
								letterSpacing : "0px",
							}}
						>
							Cancelar
						</Text>
						<IoIosCloseCircleOutline size={16} color="black" />
					</Group>
				</Button>
			</Group>
		</Stack>
	);
};

export default ProgressBarUploading;
