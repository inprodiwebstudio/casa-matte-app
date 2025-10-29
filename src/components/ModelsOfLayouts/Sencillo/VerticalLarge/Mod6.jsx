import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod9 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="22.83%"
			pl="0.2em"
			pr="0.2em"
		>
			<ImgLayout
				sheetNo={sheetNo}
				imageNo={0}
			/>
		</Stack>
	);
};

export default Mod9;
