import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod7 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt="15%"
			pb="15%"
			p="27%"
		>
			<ImgLayout
				sheetNo={sheetNo}
				imageNo={0}
			/>
		</Stack>
	);
};

export default Mod7;
