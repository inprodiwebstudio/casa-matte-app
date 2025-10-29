import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod24 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="18%"
			pl="4%"
			pr="4%"
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
						imageNo={0}
						sheetNo={sheetNo}
					/>
				</Stack>
				<Stack
					w="calc(33.33% - 0.067em)"
					h="100%"
				>
					<ImgLayout
						imageNo={1}
						sheetNo={sheetNo}
					/>
				</Stack>
				<Stack
					w="calc(33.33% - 0.067em)"
					h="100%"
				>
					<ImgLayout
						imageNo={2}
						sheetNo={sheetNo}
					/>
				</Stack>
			</Group>
		</Stack>
	);
};

export default Mod24;
