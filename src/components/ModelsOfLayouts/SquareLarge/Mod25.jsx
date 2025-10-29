import { Stack, Group, Box } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod25 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="5%"
		>
			<Stack
				spacing="0.1em"
				h="100%"
				w="100%"
			>
				<Box
					w="100%"
					h="calc(100% / 2 - 0.05em)"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Box>
				<Group
					w="100%"
					h="calc(100% / 2 - 0.05em)"
					spacing={"0.1em"}
				>
					<Box
						w="calc(100% / 2 - 0.05em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={1}
						/>
					</Box>
					<Box
						w="calc(100% / 2 - 0.05em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={2}
						/>
					</Box>
				</Group>
			</Stack>
		</Stack>
	);
};

export default Mod25;
