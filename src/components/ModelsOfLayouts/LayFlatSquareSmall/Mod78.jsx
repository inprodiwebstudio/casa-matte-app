import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod78 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="1%"
			pl="10%"
			pr="10%"
			spacing={"0.1em"}
		>
			<Group
				spacing="0.1em"
				w="100%"
				h="calc(33.33% - 0.067em)"
			>
				<Stack
					w="calc(33.33% - 0.067em)"
					h="100%"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Stack>
				<Stack
					w="calc(33.33% - 0.067em)"
					h="100%"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={1}
					/>
				</Stack>
				<Stack
					w="calc(33.33% - 0.067em)"
					h="100%"
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
					w="calc(33.33% - 0.067em)"
					h="100%"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={3}
					/>
				</Stack>
				<Stack
					w="calc(33.33% - 0.067em)"
					h="100%"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={4}
					/>
				</Stack>
				<Stack
					w="calc(33.33% - 0.067em)"
					h="100%"
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
					w="calc(33.33% - 0.067em)"
					h="100%"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={6}
					/>
				</Stack>
				<Stack
					w="calc(33.33% - 0.067em)"
					h="100%"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={7}
					/>
				</Stack>
				<Stack
					w="calc(33.33% - 0.067em)"
					h="100%"
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

export default Mod78;
