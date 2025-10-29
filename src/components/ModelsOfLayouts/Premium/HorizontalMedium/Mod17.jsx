import { Stack, Group } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod17 = ({sheetNo}) => {
	return (
		<Group
			w="100%"
			h="100%"
			p="15%"
			pl="4%"
			pr="4%"
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

export default Mod17;
