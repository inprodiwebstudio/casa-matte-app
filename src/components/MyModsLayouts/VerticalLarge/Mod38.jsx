import { Center, Stack } from "@mantine/core";
//Own components
import Text from "components/LayoutHandler/Text";

const Mod38 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	return (
		<Center w="100%" h="100%">
			<Stack>
				<Text type="h1" data="" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
			</Stack>
		</Center>
	);
};

export default Mod38;
