import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod35 = ({sheetNo}) => {
	return (
		<Group
			w="100%"
			h="100%"
			p="4%"
			spacing={"0.1em"}
		>
			<Stack
				spacing="0.1em"
				w="calc(33.33% - 0.067em)"
				h="100%"
			>
				<Stack
					h="calc(33.33% - 0.067em)"
					w="100%"
				>
					<ImgLayout
						imageNo={0}
						sheetNo={sheetNo}
					/>
				</Stack>
				<Stack
					h="calc(33.33% - 0.067em)"
					w="100%"
				>
					<ImgLayout
						imageNo={1}
						sheetNo={sheetNo}
					/>
				</Stack>
				<Stack
					h="calc(33.33% - 0.067em)"
					w="100%"
				>
					<ImgLayout
						imageNo={2}
						sheetNo={sheetNo}
					/>
				</Stack>
			</Stack>
			<Stack
				spacing="0.1em"
				w="calc(33.33% - 0.067em)"
				h="100%"
			>
				<Stack
					h="calc(33.33% - 0.067em)"
					w="100%"
				>
					<ImgLayout
						imageNo={3}
						sheetNo={sheetNo}
					/>
				</Stack>
				<Stack
					h="calc(33.33% - 0.067em)"
					w="100%"
				>
					<ImgLayout
						imageNo={4}
						sheetNo={sheetNo}
					/>
				</Stack>
				<Stack
					h="calc(33.33% - 0.067em)"
					w="100%"
				>
					<ImgLayout
						imageNo={5}
						sheetNo={sheetNo}
					/>
				</Stack>
			</Stack>
			<Stack
				spacing="0.1em"
				w="calc(33.33% - 0.067em)"
				h="100%"
			>
				<Stack
					h="calc(66.57% - 0.05em)"
					w="100%"
				>
					<ImgLayout
						imageNo={6}
						sheetNo={sheetNo}
					/>
				</Stack>
				<Stack
					h="calc(33.33% - 0.05em)"
					w="100%"
				>
					<ImgLayout
						imageNo={7}
						sheetNo={sheetNo}
					/>
				</Stack>
			</Stack>
		</Group>
	);
};

export default Mod35;
