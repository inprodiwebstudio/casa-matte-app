import { Box, Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod14 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt="25%"
			pb="25%"
		>
			<Group
				spacing="0.1em"
				w="100%"
				h={"100%"}
			>
				<Box
					h={"100%"}
					w="calc(100% / 3 - 0.067em)"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Box>
				<Box
					h={"100%"}
					w="calc(100% / 3 - 0.067em)"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={1}
					/>
				</Box>
				<Box
					h={"100%"}
					w="calc(100% / 3 - 0.067em)"
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

export default Mod14;
