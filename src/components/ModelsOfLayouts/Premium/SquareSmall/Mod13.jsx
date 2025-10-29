import { Box, Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod13 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pl="10%"
			pr="10%"
			p="30%"
		>
			<Group
				spacing="0.1em"
				w="100%"
				h={"100%"}
			>
				<Box
					w="calc(100% / 2 - 0.05em)"
					h="100%"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Box>
				<Box
					w="calc(100% / 2 - 0.05em)"
					h="100%"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={1}
					/>
				</Box>
			</Group>
		</Stack>
	);
};

export default Mod13;
