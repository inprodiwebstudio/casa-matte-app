import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod48 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="4%"
		>
			<Group
				spacing="0.1em"
				w="100%"
				h="100%"
			>
				<Group
					w="100%"
					h="calc(50% - 0.05em)"
					spacing="0.1em"
				>
					<Stack
						h="100%"
						w="calc(50% - 0.05em)"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={0}
						/>
					</Stack>
					<Stack
						h="100%"
						w="calc(50% - 0.05em)"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={1}
						/>
					</Stack>
				</Group>
				<Stack
					w="100%"
					h="calc(50% - 0.05em)"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={2}
					/>
				</Stack>
			</Group>
		</Stack>
	);
};

export default Mod48;
