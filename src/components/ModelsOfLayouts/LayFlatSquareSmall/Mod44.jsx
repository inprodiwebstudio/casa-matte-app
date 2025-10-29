import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod44 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
		>
			<ImgLayout
				sheetNo={sheetNo}
				imageNo={0}
			/>
		</Stack>
	);
};

export default Mod44;
