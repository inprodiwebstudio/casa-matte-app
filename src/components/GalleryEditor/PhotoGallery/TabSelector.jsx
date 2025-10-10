import { Box, Center, Group, Text }               from "@mantine/core";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

//Slices
import { gallerySlice } from "store/Slices";

const TabSelector = () => {
	const dispatch = useDispatch();

	const typeListGallery = useSelector((state) => state.gallerySlice.typeViewList, shallowEqual);

	const onChangeTab = (tabKey) => {
		dispatch(gallerySlice.actions.setTypeViewList(tabKey));
	};

	return (
		<Group
			style={{
				background   : "#f6f6f6",
				borderRadius : "8px",
				border       : "1px solid #e6e6e7",
				cursor       : "pointer",
			}}
			w="270px"
			h="32px"
			spacing={0}
		>
			<Box
				w="50%"
				h="100%"
				style={{
					borderRadius : "8px",
					background   : typeListGallery === "photos" && "#58595b",
					transition   : "all ease 200ms",
				}}
				onClick={() => onChangeTab("photos")}
			>
				<Center
					w="100%"
					h="100%"
				>
					<Text
						size="12px"
						color={(typeListGallery === "photos") ? "white" : "black"}
						weight={500}
						style={{
							fontFamily    : "Helvetica",
							letterSpacing : "0px",
							transition    : "all ease 200ms",
						}}
					>
						Todas las fotos
					</Text>
				</Center>
			</Box>
			<Box
				w="50%"
				h="100%"
				style={{
					background   : typeListGallery === "folders" && "#58595b",
					borderRadius : "8px",
					transition   : "all ease 200ms",
				}}
				onClick={() => onChangeTab("folders")}
			>
				<Center
					w="100%"
					h="100%"
				>
					<Text
						size="12px"
						color={(typeListGallery === "folders") ? "white" : "black"}
						weight={500}
						style={{
							fontFamily    : "Helvetica",
							letterSpacing : "0px",
							transition    : "all ease 200ms",
						}}
					>
						Carpetas
					</Text>
				</Center>
			</Box>
		</Group>
	);
};

export default TabSelector;
