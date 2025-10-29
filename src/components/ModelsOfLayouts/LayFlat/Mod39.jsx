import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod39 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt="13%"
			pb="13%"
		>
			<ImgLayout
				sheetNo={sheetNo}
				imageNo={0}
			/>
		</Stack>
	);
};

export default Mod39;
