import {Center, Stack} from "@mantine/core";
//Own components
import Text from "components/LayoutHandler/Text";


const Mod42 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const handleWidthTextContainer = () => {
		if (isThumbNail) {
			return "55px";
		}
		if (isInPaginator) {
			return "149px";
		}
		if (isInWorkSpace) {
			return "250px";
		}
	};
	return (
		<Center
			w="100%"
			h="100%"
		>
			<Stack
				mah="70%"
				w={handleWidthTextContainer()}
				aria-hidden={true}
			>
				<Text type="regular" align="left" data="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..." isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
			</Stack>
		</Center>
	);
};

export default Mod42;
