import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";
const Mod13 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pl="27%"
			pr="27%"
		>
			<Stack w="100%" h="100%" spacing={"0.1em"}>
				<Stack h="calc(33.33% - 0.067em)" w="100%">
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Stack>
				<Stack h="calc(33.33% - 0.067em)" w="100%">
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={1}
					/>
				</Stack>
				<Stack h="calc(33.33% - 0.067em)" w="100%">
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={2}
					/>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Mod13;
