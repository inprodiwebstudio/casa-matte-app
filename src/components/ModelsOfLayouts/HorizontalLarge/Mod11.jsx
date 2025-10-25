import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod11 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="13%"
			pl="29%"
			pr="29%"
		>
			<ImgLayout
				sheetNo={sheetNo}
				imageNo={0}
			/>
		</Stack>
	);
};

export default Mod11;
