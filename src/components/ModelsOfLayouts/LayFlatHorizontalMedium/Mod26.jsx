import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod26 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="3%"
			pl="13%"
			pr="13%"
		>
			<Stack
				spacing="0.1em"
				h="100%"
				w="100%"
			>
				<Stack w="100%" h="50%">
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Stack>
				<Group
					w="100%"
					h="50%"
					spacing={"0.1em"}
				>
					<Stack
						w="calc(50% - 0.05em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={1}
						/>
					</Stack>
					<Stack
						w="calc(50% - 0.05em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={2}
						/>
					</Stack>
				</Group>
			</Stack>
		</Stack>
	);
};

export default Mod26;
