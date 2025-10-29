import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod10 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt={"5%"}
			pb={"5%"}
			p="15%"
		>
			<ImgLayout
				sheetNo={sheetNo}
				imageNo={0}
			/>
		</Stack>
	);
};

export default Mod10;
