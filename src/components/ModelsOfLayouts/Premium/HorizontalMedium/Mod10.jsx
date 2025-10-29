import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod10 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="3%"
		>
			<ImgLayout
				imageNo={0}
				sheetNo={sheetNo}
			/>
		</Stack>
	);
};

export default Mod10;
