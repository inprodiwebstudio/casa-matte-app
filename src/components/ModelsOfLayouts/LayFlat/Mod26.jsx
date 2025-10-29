import { Stack, Flex } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod26 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="15%"
		>
			<Stack
				spacing="0.1em"
				h="100%"
				w="100%"
			>
				<Flex w="100%" h="50%">
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Flex>
				<Flex w="100%" h="50%" gap="0.1em">
					<Stack w="50%" h="100%">
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={1}
						/>
					</Stack>
					<Stack w="50%" h="100%">
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={2}
						/>
					</Stack>
				</Flex>
			</Stack>
		</Stack>
	);
};

export default Mod26;
