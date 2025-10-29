import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod9 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="19%"
			pl="30%"
			pr="30%"
		>
			<ImgLayout
				imageNo={0}
				sheetNo={sheetNo}
			/>
		</Stack>
	);
};

export default Mod9;
