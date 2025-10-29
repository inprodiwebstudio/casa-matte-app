import { Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod57 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pl="25%"
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
					w="43%"
					h="38%"
					sx={{
						position : "absolute",
						top      : "31%",
						right    : "77%",
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

export default Mod57;
