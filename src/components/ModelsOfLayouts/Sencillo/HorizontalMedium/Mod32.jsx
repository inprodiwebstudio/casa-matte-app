import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod32 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="18%"
			pl="4%"
			pr="4%"
			spacing={"0.1em"}
		>
			<Group
				spacing="0.1em"
				w="100%"
				h="calc(50% - 0.05em)"
			>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayout
						imageNo={0}
						sheetNo={sheetNo}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayout
						imageNo={1}
						sheetNo={sheetNo}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayout
						imageNo={2}
						sheetNo={sheetNo}
					/>
				</Stack>
			</Group>
			<Group
				spacing="0.1em"
				w="100%"
				h="calc(50% - 0.05em)"
			>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayout
						imageNo={3}
						sheetNo={sheetNo}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayout
						imageNo={4}
						sheetNo={sheetNo}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayout
						imageNo={5}
						sheetNo={sheetNo}
					/>
				</Stack>
			</Group>
		</Stack>
	);
};

export default Mod32;
