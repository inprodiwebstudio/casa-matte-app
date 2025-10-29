import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod7 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="13%"
			pl="32%"
			pr="32%"
		>
			<ImgLayout
				imageNo={0}
				sheetNo={sheetNo}
			/>
		</Stack>
	);
};

export default Mod7;
