import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod9 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pl="25%"
			pr="25%"
			p="3%"
		>
			<ImgLayout
				sheetNo={sheetNo}
				imageNo={0}
			/>
		</Stack>
	);
};

export default Mod9;
