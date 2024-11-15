import { Box, Stack } from "@mantine/core";
import LineSkeleton   from "./LineSkeleton";

const SubTitle = ({width, align}) => {
	return (
		<Stack w="100%" align={align ?? "center"}>
			<Box w={width ?? "50%"}>
				<LineSkeleton height="0.11em" />
			</Box>
		</Stack>
	);
};

export default SubTitle;
