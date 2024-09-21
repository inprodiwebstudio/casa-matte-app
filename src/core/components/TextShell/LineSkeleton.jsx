import { Skeleton } from "@mantine/core";
const LineSkeleton = ({height}) => {
	return (
		<Skeleton
			animate={false}
			height={height}
			width="100%"
			widthcircle
		/>
	);
};

export default LineSkeleton;
