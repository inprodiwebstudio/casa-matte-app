import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod24 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pl="15%"
			pr="15%"
		>
			<Stack
				spacing="0.1em"
				w="100%"
				h="100%"
			>
				<Stack
					h="calc(50% - 0.05em)"
					w="100%"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Stack>
				<Stack
					h="calc(50% - 0.05em)"
					w="100%"
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={1}
					/>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Mod24;
