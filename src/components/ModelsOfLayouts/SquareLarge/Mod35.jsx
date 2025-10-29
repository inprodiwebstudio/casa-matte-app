import { Stack, Group, Box } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod35 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="2%"
		>
			<Stack
				spacing="0.1em"
				h="100%"
				w="100%"
			>
				<Group spacing={"0.1em"} w="100%" h="calc(67% - 0.05em)">
					<Box
						h="100%"
						w="calc(67% - 0.05em)"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={0}
						/>
					</Box>
					<Stack h="100%" w="calc(33% - 0.05em)" spacing={"0.1em"}>
						<Box
							h="calc(100% / 2 - 0.05em)"
							w="100%"
						>
							<ImgLayout
								sheetNo={sheetNo}
								imageNo={1}
							/>
						</Box>
						<Box
							h="calc(100% / 2 - 0.05em)"
							w="100%"
						>
							<ImgLayout
								sheetNo={sheetNo}
								imageNo={2}
							/>
						</Box>
					</Stack>
				</Group>
				<Group
					w="100%"
					h="calc(33% - 0.05em)"
					spacing={"0.1em"}
				>
					<Box
						w="calc(100% / 3 - 0.067em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={3}
						/>
					</Box>
					<Box
						w="calc(100% / 3 - 0.067em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={4}
						/>
					</Box>
					<Box
						w="calc(100% / 3 - 0.067em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={5}
						/>
					</Box>
				</Group>
			</Stack>
		</Stack>
	);
};

export default Mod35;
