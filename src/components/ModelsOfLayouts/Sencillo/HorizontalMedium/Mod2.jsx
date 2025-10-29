import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod2 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="10%"
			pl="15%"
			pr="15%"
		>
			<ImgLayout
				imageNo={0}
				sheetNo={sheetNo}
			/>
		</Stack>
	);
};

export default Mod2;
