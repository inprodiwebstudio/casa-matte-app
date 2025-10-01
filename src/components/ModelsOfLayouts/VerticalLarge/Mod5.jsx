import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod8 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt="21.40%"
			pb="21.40%"
		>
			<ImgLayout
				sheetNo={sheetNo}
				imageNo={0}
			/>
		</Stack>
	);
};

export default Mod8;
