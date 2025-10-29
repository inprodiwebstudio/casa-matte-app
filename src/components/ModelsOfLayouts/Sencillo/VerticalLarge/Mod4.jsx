import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod7 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="25%"
			pt="21%"
			pb="21%"
		>
			<ImgLayout
				sheetNo={sheetNo}
				imageNo={0}
			/>
		</Stack>
	);
};

export default Mod7;
