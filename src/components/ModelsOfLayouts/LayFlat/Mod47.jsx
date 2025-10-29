import { Flex, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod47 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="4%"
		>
			<Flex
				gap="0.1em"
				h="100%"
				w="100%"
			>
				<Stack w="70%" h="100%">
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Stack>
				<Stack
					w="30%"
					h="100%"
					spacing={"0.1em"}
				>
					<Stack
						w="100%"
						h="calc(50% - 0.05em)"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={1}
						/>
					</Stack>
					<Stack
						w="100%"
						h="calc(50% - 0.05em)"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={2}
						/>
					</Stack>
				</Stack>
			</Flex>
		</Stack>
	);
};

export default Mod47;
