import { Stack, Group, Box } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod33 = ({sheetNo}) => {
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
							imageNo={0}
						/>
					</Box>
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
				</Group>
				<Box
					h="100%"
					w="calc(65% - 0.05em)"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={3}
					/>
				</Box>
			</Group>
		</Stack>
	);
};

export default Mod33;
