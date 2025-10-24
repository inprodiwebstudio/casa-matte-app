import { Stack, Group, Box } from "@mantine/core";
import ImgLayout             from "components/LayoutHandler/ImgLayout";
//Own components

const Mod37 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="2%"
			spacing={"0.1em"}
		>
			<Group
				w={"100%"}
				h={"calc(100% / 3 - 0.067em)"}
				spacing={"0.1em"}
			>
				<Box
					h={"100%"}
					w={"calc(100% / 3 - 0.067em)"}
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Box>
				<Box
					h={"100%"}
					w={"calc(100% / 3 - 0.067em)"}
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={1}
					/>
				</Box>
				<Box
					h={"100%"}
					w={"calc(100% / 3 - 0.067em)"}
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={2}
					/>
				</Box>
			</Group>
			<Group
				w={"100%"}
				h={"calc(100% / 3 - 0.067em)"}
				spacing={"0.1em"}
			>
				<Box
					h={"100%"}
					w={"calc(100% / 3 - 0.067em)"}
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={3}
					/>
				</Box>
				<Box
					h={"100%"}
					w={"calc(100% / 3 - 0.067em)"}
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={4}
					/>
				</Box>
				<Box
					h={"100%"}
					w={"calc(100% / 3 - 0.067em)"}
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={5}
					/>
				</Box>
			</Group>
			<Group
				w={"100%"}
				h={"calc(100% / 3 - 0.067em)"}
				spacing={"0.1em"}
			>
				<Box
					h={"100%"}
					w={"calc(100% / 3 - 0.067em)"}
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={6}
					/>
				</Box>
				<Box
					h={"100%"}
					w={"calc(100% / 3 - 0.067em)"}
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={7}
					/>
				</Box>
				<Box
					h={"100%"}
					w={"calc(100% / 3 - 0.067em)"}
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={8}
					/>
				</Box>
			</Group>
		</Stack>
	);
};

export default Mod37;
