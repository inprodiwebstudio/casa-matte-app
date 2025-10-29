import { Stack, Group, Box } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod19 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pl="16%"
			pr="16%"
			p="33%"
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

export default Mod19;
