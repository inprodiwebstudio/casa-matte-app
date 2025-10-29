import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod30 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="13%"
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
						w="calc(50% - 0.05em)"
						h="100%"
					>
						<ImgLayout
							imageNo={0}
							sheetNo={sheetNo}
						/>
					</Stack>
					<Stack
						w="calc(50% - 0.05em)"
						h="100%"
					>
						<ImgLayout
							imageNo={1}
							sheetNo={sheetNo}
						/>
					</Stack>
				</Group>
				<Group
					spacing={"0.1em"}
					w="100%"
					h="calc(50% - 0.05em)"
				>
					<Stack
						w="calc(50% - 0.05em)"
						h={"100%"}
					>
						<ImgLayout
							imageNo={2}
							sheetNo={sheetNo}
						/>
					</Stack>
					<Stack
						w="calc(50% - 0.05em)"
						h={"100%"}
					>
						<ImgLayout
							imageNo={3}
							sheetNo={sheetNo}
						/>
					</Stack>
				</Group>
			</Group>
		</Stack>
	);
};

export default Mod30;
