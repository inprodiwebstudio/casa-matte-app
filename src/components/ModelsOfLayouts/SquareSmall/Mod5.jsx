import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod5 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="20%"
			pt="2%"
			pb={"2%"}
		>
			<ImgLayout
				sheetNo={sheetNo}
				imageNo={0}
			/>
		</Stack>
	);
};

export default Mod5;
