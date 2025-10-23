import { Stack, Box, Group } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";


const Mod15 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt="25%"
			pb="25%"
			p="2%"
		>
			<Group
				spacing="0.1em"
				w="100%"
				h={"100%"}
			>
				<Box
					w="calc(100% / 3 - 0.067em)"
					h={"100%"}
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Box>
				<Box
					w="calc(100% / 3 - 0.067em)"
					h={"100%"}
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={1}
					/>
				</Box>
				<Box
					w="calc(100% / 3 - 0.067em)"
					h={"100%"}
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={2}
					/>
				</Box>
			</Group>
		</Stack>
	);
};

export default Mod15;
