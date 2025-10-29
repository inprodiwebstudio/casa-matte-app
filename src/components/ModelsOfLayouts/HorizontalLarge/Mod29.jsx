import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod29 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="22%"
			pl="3%"
			pr="3%"
		>
			<Group
				spacing="0.1em"
				w="100%"
				h="100%"
			>
				<Stack
					w="calc(33.33% - 0.067em)"
					h="100%"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Stack>
				<Stack
					w="calc(33.33% - 0.067em)"
					h="100%"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={1}
					/>
				</Stack>
				<Stack
					w="calc(33.33% - 0.067em)"
					h="100%"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={2}
					/>
				</Stack>
			</Group>
		</Stack>
	);
};

export default Mod29;
