import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod9 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="4%"
			pt="32%"
			pb="32%"
		>
			<ImgLayout
				sheetNo={sheetNo}
				imageNo={0}
			/>
		</Stack>
	);
};

export default Mod9;
