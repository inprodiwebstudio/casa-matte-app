import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod3 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="18%"
			pl="23%"
			pr="23%"
		>
			<ImgLayout
				imageNo={0}
				sheetNo={sheetNo}
			/>
		</Stack>
	);
};

export default Mod3;
