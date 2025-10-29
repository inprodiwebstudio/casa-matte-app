import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod22 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="3%"
			pl="30%"
			pr="30%"
		>
			<Stack
				spacing="0.1em"
				w="100%"
				h="100%"
			>
				<Stack
					h="33.33%"
					w="100%"
				>
					<ImgLayout
						imageNo={0}
						sheetNo={sheetNo}
					/>
				</Stack>
				<Stack
					h="33.33%"
					w="100%"
				>
					<ImgLayout
						imageNo={1}
						sheetNo={sheetNo}
					/>
				</Stack>
				<Stack
					h="33.33%"
					w="100%"
				>
					<ImgLayout
						imageNo={2}
						sheetNo={sheetNo}
					/>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Mod22;
