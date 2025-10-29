import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod13 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="3%"
			pl="25%"
			pr="25%"
			spacing={"0.1em"}
		>
			<Stack
				h="calc(50% - 0.05em)"
				w="100%"
			>
				<ImgLayout
					imageNo={0}
					sheetNo={sheetNo}
				/>
			</Stack>
			<Stack
				h="calc(50% - 0.05em)"
				w="100%"
			>
				<ImgLayout
					imageNo={1}
					sheetNo={sheetNo}
				/>
			</Stack>
		</Stack>
	);
};

export default Mod13;
