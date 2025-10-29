import { Stack, Flex } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod33 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="0.2em"
		>
			<Flex
				gap="0.1em"
				h="100%"
				w="100%"
			>
				<Stack w="40%" h="100%" spacing="0.1em">
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
				<Stack w="60%" h="100%" spacing="0.1em">
					<Stack w="100%" h="33.33%">
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={2}
						/>
					</Stack>
					<Stack w="100%" h="33.33%">
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={3}
						/>
					</Stack>
					<Stack w="100%" h="33.33%">
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={4}
						/>
					</Stack>
				</Stack>
			</Flex>
		</Stack>
	);
};

export default Mod33;
