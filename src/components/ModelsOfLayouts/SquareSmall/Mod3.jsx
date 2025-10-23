import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod3 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="20%"
		>
			<ImgLayout
				sheetNo={sheetNo}
				imageNo={0}
			/>
		</Stack>
	);
};

export default Mod3;
