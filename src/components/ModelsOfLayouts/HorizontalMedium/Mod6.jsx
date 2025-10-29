import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod6 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pr="50%"
		>
			<ImgLayout
				imageNo={0}
				sheetNo={sheetNo}
			/>
		</Stack>
	);
};

export default Mod6;
