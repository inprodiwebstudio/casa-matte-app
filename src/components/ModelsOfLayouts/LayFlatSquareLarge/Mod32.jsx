import { Flex, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod32 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="3%"
		>
			<Flex
				gap="0.1em"
				h="100%"
				w="100%"
			>
				<Stack
					w="30%"
					h="100%"
					spacing={"0.1em"}
				>
					<Stack
						h="calc(50% - 0.05em)"
						w="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={0}
						/>
					</Stack>
					<Stack
						h="calc(50% - 0.05em)"
						w="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={1}
						/>
					</Stack>
				</Stack>
				<Stack w="70%" h="100%">
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={2}
					/>
				</Stack>
			</Flex>
		</Stack>
	);
};

export default Mod32;
