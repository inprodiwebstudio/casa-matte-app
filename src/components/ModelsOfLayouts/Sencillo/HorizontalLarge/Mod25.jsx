import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod25 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="25%"
			pl="10%"
			pr="10%"
		>
			<Group
				spacing="0.1em"
				w="100%"
				h="100%"
			>
				<Stack
					w="calc(70% - 0.05em)"
					h="100%"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Stack>
				<Stack
					w="calc(30% - 0.05em)"
					h="100%"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={1}
					/>
				</Stack>
			</Group>
		</Stack>
	);
};

export default Mod25;
