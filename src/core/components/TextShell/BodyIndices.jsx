import { Box, Stack } from "@mantine/core";
import LineSkeleton   from "./LineSkeleton";

const BodyIndices = ({width, align}) => {
	return (
		<Stack w="100%" align={align ?? "center"} spacing="0.1em">
			<Box w={width ?? "60%"}>
				<LineSkeleton height="0.1em" />
			</Box>
			<Box w={width ?? "60%"}>
				<LineSkeleton height="0.1em" />
			</Box>
			<Box w={width ?? "60%"}>
				<LineSkeleton height="0.1em" />
			</Box>
			<Box w={width ?? "60%"}>
				<LineSkeleton height="0.1em" />
			</Box>
		</Stack>
	);
};

export default BodyIndices;
