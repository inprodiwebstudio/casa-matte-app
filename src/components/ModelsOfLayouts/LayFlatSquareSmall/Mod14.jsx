import { Flex, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod14 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="10%"
			pt="15%"
			pb="15%"
		>
			<Flex
				gap="0.1em"
				h="100%"
				w="100%"
			>
				<Stack w="50%" h="100%">
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Stack>
				<Stack  w="50%" h="100%">
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={1}
					/>
				</Stack>
			</Flex>
		</Stack>
	);
};

export default Mod14;
