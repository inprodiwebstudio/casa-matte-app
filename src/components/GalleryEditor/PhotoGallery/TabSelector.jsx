import { Box, Center, Group, Text } from "@mantine/core";
import { useState }                 from "react";

const TabSelector = () => {
	const [currentTabKey, setCurrentTabKey] = useState("photos");

	const onChangeTab = (tabKey) => {
		setCurrentTabKey(tabKey);
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
					background   : currentTabKey === "photos" && "#58595b",
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
						color={(currentTabKey === "photos") ? "white" : "black"}
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
					background   : currentTabKey === "folders" && "#58595b",
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
						color={(currentTabKey === "folders") ? "white" : "black"}
						weight={500}
						style={{
							fontFamily    : "Helvetica",
							letterSpacing : "0px",
							transition    : "all ease 200ms",
						}}
					>
						Todas las carpetas
					</Text>
				</Center>
			</Box>
		</Group>
	);
};

export default TabSelector;
