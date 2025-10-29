import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod10 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pl="30%"
			pr="30%"
			p="8%"
		>
			<ImgLayout
				sheetNo={sheetNo}
				imageNo={0}
			/>
		</Stack>
	);
};

export default Mod10;
