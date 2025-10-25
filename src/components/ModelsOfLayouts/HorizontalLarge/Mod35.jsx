import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod35 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="3%"
			pl="20%"
			pr="20%"
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
							sheetNo={sheetNo}
							imageNo={0}
						/>
					</Stack>
					<Stack
						w="calc(50% - 0.05em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={1}
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
							sheetNo={sheetNo}
							imageNo={2}
						/>
					</Stack>
					<Stack
						w="calc(50% - 0.05em)"
						h={"100%"}
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={3}
						/>
					</Stack>
				</Group>
			</Group>
		</Stack>
	);
};

export default Mod35;
