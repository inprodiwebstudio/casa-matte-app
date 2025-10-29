import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod6 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pl="17%"
			pr="17%"
			p="3%"
		>
			<ImgLayout
				sheetNo={sheetNo}
				imageNo={0}
			/>
		</Stack>
	);
};

export default Mod6;
