import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod10 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="15%"
			pt="40%"
			pb="40%"
		>
			<ImgLayout
				sheetNo={sheetNo}
				imageNo={0}
			/>
		</Stack>
	);
};

export default Mod10;
