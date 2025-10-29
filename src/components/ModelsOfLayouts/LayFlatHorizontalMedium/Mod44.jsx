import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod44 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pl="23%"
		>
			<Stack
				h="100%"
				w="100%"
				sx={{
					position : "relative",
				}}
			>
				<Stack w="100%" h="100%">
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Stack>
				<Stack
					w="38%"
					h="45%"
					sx={{
						position : "absolute",
						top      : "28%",
						right    : "87%",
					}}
				>
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={1}
						isCoverImage={true}
					/>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Mod44;
