import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod51 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="2%"
			pt="10%"
			pb="10%"
		>
			<ImgLayout
				sheetNo={sheetNo}
				imageNo={0}
			/>
		</Stack>
	);
};

export default Mod51;
