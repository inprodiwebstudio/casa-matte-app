import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod36 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="4%"
			pl="8%"
			pr="8%"
		>
			<ImgLayout
				sheetNo={sheetNo}
				imageNo={0}
			/>
		</Stack>
	);
};

export default Mod36;
