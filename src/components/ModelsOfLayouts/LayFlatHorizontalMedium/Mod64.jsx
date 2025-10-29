import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod64 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="2%"
			pt="5%"
			pb="5%"
		>
			<Group
				spacing="0.1em"
				w="100%"
				h="100%"
			>
				<Stack
					w="calc(20% - 0.08em)"
					h="100%"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Stack>
				<Stack
					w="calc(20% - 0.08em)"
					h="100%"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={1}
					/>
				</Stack>
				<Stack
					w="calc(20% - 0.08em)"
					h="100%"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={2}
					/>
				</Stack>
				<Stack
					w="calc(20% - 0.08em)"
					h="100%"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={3}
					/>
				</Stack>
				<Stack
					w="calc(20% - 0.08em)"
					h="100%"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={4}
					/>
				</Stack>
			</Group>
		</Stack>
	);
};

export default Mod64;
