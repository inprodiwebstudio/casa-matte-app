import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod58 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt="34%"
			pb="34%"
		>
			<ImgLayout
				sheetNo={sheetNo}
				imageNo={0}
			/>
		</Stack>
	);
};

export default Mod58;
