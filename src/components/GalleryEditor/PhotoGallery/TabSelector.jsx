import { Box, Center, Group, Text } from "@mantine/core";
import {  useContext }              from "react";

//Contexts
import {galleryTypeViewContext} from "contexts/galleryTypeView";

const TabSelector = () => {
	const {gridType, setGridType} = useContext(galleryTypeViewContext);

	const onChangeTab = (tabKey) => {
		setGridType(tabKey);
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
					background   : gridType === "photos" && "#58595b",
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
						color={(gridType === "photos") ? "white" : "black"}
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
					background   : gridType === "folders" && "#58595b",
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
						color={(gridType === "folders") ? "white" : "black"}
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
