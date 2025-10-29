import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod62 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="2%"
		>
			<Group
				spacing="0.1em"
				w="100%"
				h="100%"
			>
				<Stack
					spacing="0.1em"
					w="calc(20% - 0.067em)"
					h="100%"
				>
					<Stack
						w="100%"
						h="calc(50% - 0.05em)"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={0}
						/>
					</Stack>
					<Stack
						w="100%"
						h="calc(50% - 0.05em)"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={1}
						/>
					</Stack>
				</Stack>
				<Stack
					w="calc(60% - 0.067em)"
					h="100%"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={2}
					/>
				</Stack>
				<Stack
					spacing="0.1em"
					w="calc(20% - 0.067em)"
					h="100%"
				>
					<Stack
						w="100%"
						h="calc(50% - 0.05em)"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={3}
						/>
					</Stack>
					<Stack
						w="100%"
						h="calc(50% - 0.05em)"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={4}
						/>
					</Stack>
				</Stack>
			</Group>
		</Stack>
	);
};

export default Mod62;
