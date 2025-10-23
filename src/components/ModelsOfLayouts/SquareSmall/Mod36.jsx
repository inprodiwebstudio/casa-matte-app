import { Stack, Group, Box } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod36 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="2%"
			pt="18%"
			pb="18%"
		>
			<Stack
				spacing="0.1em"
				h="100%"
				w="100%"
			>
				<Group
					w="100%"
					h="calc(100% / 2 - 0.05em)"
					spacing={"0.1em"}
				>
					<Box
						w="calc(100% / 3 - 0.067em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={0}
						/>
					</Box>
					<Box
						w="calc(100% / 3 - 0.067em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={1}
						/>
					</Box>
					<Box
						w="calc(100% / 3 - 0.067em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={2}
						/>
					</Box>
				</Group>
				<Group
					w="100%"
					h="calc(100% / 2 - 0.05em)"
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

export default Mod36;
