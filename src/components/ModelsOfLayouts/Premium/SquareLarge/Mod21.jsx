import { Box, Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod21 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="0%"
			pl="5%"
			pr="5%"
		>
			<Stack
				h="100%"
				w="100%"
				pt="30%"
				pb="30%"
			>
				<Group
					w="100%"
					h="100%"
					spacing={"0.1em"}
				>
					<Box
						w="calc(70% - 0.05em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={0}
						/>
					</Box>
					<Box
						w="calc(30% - 0.05em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={1}
						/>
					</Box>
				</Group>
			</Stack>
		</Stack>
	);
};

export default Mod21;
