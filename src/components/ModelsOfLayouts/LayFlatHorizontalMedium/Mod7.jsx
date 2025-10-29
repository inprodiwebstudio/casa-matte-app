import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod7 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pl="22%"
			pr="22%"
			p="8%"
		>
			<ImgLayout
				sheetNo={sheetNo}
				imageNo={0}
			/>
		</Stack>
	);
};

export default Mod7;
