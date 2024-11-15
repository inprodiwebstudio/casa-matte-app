import { Box, Stack } from "@mantine/core";
import LineSkeleton   from "./LineSkeleton";

const Body = ({width, align}) => {
	return (
		<Stack
			w="100%"
			align={align ?? "flex-start"}
			spacing="0.06em !important"
		>
			<Box w={width ?? "100%"} height="0.06em">
				<LineSkeleton height="0.06em" />
			</Box>
			<Box w={width ?? "80%"} height="0.06em">
				<LineSkeleton height="0.06em" />
			</Box>
			<Box w={width ?? "90%"} height="0.06em">
				<LineSkeleton height="0.06em" />
			</Box>
			<Box w={width ?? "100%"} height="0.06em">
				<LineSkeleton height="0.06em" />
			</Box>
		</Stack>
	);
};

export default Body;
