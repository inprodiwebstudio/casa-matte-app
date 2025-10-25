import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod57 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="4%"
			spacing={"0.1em"}
		>
			<Group
				spacing="0.1em"
				w="100%"
				h="calc(33.33% - 0.067em)"
			>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={1}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={2}
					/>
				</Stack>
			</Group>
			<Group
				spacing="0.1em"
				w="100%"
				h="calc(33.33% - 0.067em)"
			>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={3}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={4}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={5}
					/>
				</Stack>
			</Group>
			<Group
				spacing="0.1em"
				w="100%"
				h="calc(33.33% - 0.067em)"
			>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={6}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={7}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={8}
					/>
				</Stack>
			</Group>
		</Stack>
	);
};

export default Mod57;
