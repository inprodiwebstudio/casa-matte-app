import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod5 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt="20%"
			pb={"20%"}
		>
			<ImgLayout
				sheetNo={sheetNo}
				imageNo={0}
			/>
		</Stack>
	);
};

export default Mod5;
