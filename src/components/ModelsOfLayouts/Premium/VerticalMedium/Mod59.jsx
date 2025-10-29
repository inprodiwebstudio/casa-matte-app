import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod58 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt="40%"
			pb="40%"
			pl="10%"
			pr="10%"
		>
			<ImgLayout
				sheetNo={sheetNo}
				imageNo={0}
			/>
		</Stack>
	);
};

export default Mod58;
