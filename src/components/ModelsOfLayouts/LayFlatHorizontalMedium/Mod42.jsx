import { Flex, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod42 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="2%"
		>
			<Flex
				gap="0.1em"
				h="100%"
				w="100%"
			>
				<Stack w="40%" h="100%">
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Stack>
				<Stack  w="60%" h="100%">
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={1}
					/>
				</Stack>
			</Flex>
		</Stack>
	);
};

export default Mod42;
