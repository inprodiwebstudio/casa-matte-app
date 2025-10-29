import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod17 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="4%"
			pl="20%"
			pr="20%"
		>
			<Stack
				spacing="0.1em"
				w="100%"
				h="100%"
			>
				<Stack w="100%" h="50%">
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Stack>
				<Stack w="100%" h="50%">
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={1}
					/>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Mod17;
