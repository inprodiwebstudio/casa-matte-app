import { Flex, Stack, Group } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod53 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="0%"
		>
			<Flex
				gap="0.1em"
				h="100%"
				w="100%"
				sx={{
					gap : 0,
				}}
			>
				<Stack
					w="60%"
					h="100%"
					pr="0%"
					p="2%"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Stack>
				<Group
					w="40%"
					h="100%"
					spacing={"0.1em"}
					p="3%"
					pt="5%"
					pb="5%"
				>
					<Stack
						w="calc(50% - 0.05em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={1}
						/>
					</Stack>
					<Stack
						w="calc(50% - 0.05em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={2}
						/>
					</Stack>
				</Group>
			</Flex>
		</Stack>
	);
};

export default Mod53;
