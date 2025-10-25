import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod1 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt="15%"
			pb="15%"
		>
			<ImgLayout
				sheetNo={sheetNo}
				imageNo={0}
			/>
		</Stack>
	);
};

export default Mod1;
