import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod13 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="22%"
			pl="35%"
			pr="35%"
		>
			<ImgLayout
				sheetNo={sheetNo}
				imageNo={0}
			/>
		</Stack>
	);
};

export default Mod13;
