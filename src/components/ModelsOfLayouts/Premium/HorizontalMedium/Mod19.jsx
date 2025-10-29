import { Stack, Group } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod19 = ({sheetNo}) => {
	return (
		<Group
			w="100%"
			h="100%"
			p="20%"
			pl="15%"
			pr="15%"
			spacing={"0.1em"}
		>
			<Stack
				w="calc(30% - 0.05em)"
				h="100%"
			>
				<ImgLayout
					imageNo={0}
					sheetNo={sheetNo}
				/>
			</Stack>
			<Stack
				w="calc(70% - 0.05em)"
				h="100%"
			>
				<ImgLayout
					imageNo={1}
					sheetNo={sheetNo}
				/>
			</Stack>
		</Group>
	);
};

export default Mod19;
