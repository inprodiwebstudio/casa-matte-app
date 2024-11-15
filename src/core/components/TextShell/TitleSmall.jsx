import { Box, Stack } from "@mantine/core";
import LineSkeleton   from "./LineSkeleton";

const TitleSmall = ({width, align}) => {
	return (
		<Stack w="100%" align={align ?? "center"}>
			<Box w={width ?? "55%"}>
				<LineSkeleton height="0.11em" />
			</Box>
		</Stack>
	);
};

export default TitleSmall;
