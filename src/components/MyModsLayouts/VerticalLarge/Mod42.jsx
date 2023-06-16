import {Center, Stack} from "@mantine/core";
//Own components
import Text from "components/LayoutHandler/Text";


const Mod42 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	return (
		<Center
			w="100%"
			h="100%"
		>
			<Stack
				mah="70%"
				w="55%"
				aria-hidden={true}
			>
				<Text type="regular" align="left" data="" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
			</Stack>
		</Center>
	);
};

export default Mod42;
