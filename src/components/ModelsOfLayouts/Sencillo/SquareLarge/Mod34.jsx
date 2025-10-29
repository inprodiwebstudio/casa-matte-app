import { Stack, Box, Group } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod34 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="2%"
		>
			<Group
				spacing="0.1em"
				h="100%"
				w="100%"
			>
				<Box
					h="100%"
					w="calc(65% - 0.05em)"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Box>
				<Group
					h="100%"
					w="calc(35% - 0.05em)"
					spacing={"0.1em"}
				>
					<Box
						h="calc(100% / 3 - 0.067em)"
						w="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={1}
						/>
					</Box>
					<Box
						h="calc(100% / 3 - 0.067em)"
						w="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={2}
						/>
					</Box>
					<Box
						h="calc(100% / 3 - 0.067em)"
						w="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={3}
						/>
					</Box>
				</Group>
			</Group>
		</Stack>
	);
};

export default Mod34;
