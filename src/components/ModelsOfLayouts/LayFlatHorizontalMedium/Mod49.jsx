import { Flex, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod49 = ({sheetNo}) => {
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
				<Stack  w="80%" h="100%">
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Stack>
				<Stack
					w="20%"
					h="100%"
					spacing={"0.1em"}
				>
					<Stack
						w="100%"
						h="calc(30% - 0.05em)"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={1}
						/>
					</Stack>
					<Stack
						w="100%"
						h="calc(70% - 0.05em)"
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

export default Mod49;
