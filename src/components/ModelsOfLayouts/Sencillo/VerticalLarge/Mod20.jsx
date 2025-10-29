import { Flex, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod23 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt="32.08%"
			pb="32.08%"
		>
			<Flex
				gap="0.1em"
				h="100%"
				w="100%"
			>
				<Stack w="33.33%" h="100%">
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Stack>
				<Stack w="33.33%" h="100%">
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={1}
					/>
				</Stack>
				<Stack w="33.33%" h="100%">
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={2}
					/>
				</Stack>
			</Flex>
		</Stack>
	);
};

export default Mod23;
