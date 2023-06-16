import {Stack, Flex } from "@mantine/core";
//Own components
import Text from "components/LayoutHandler/Text";

const Mod39 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
		>
			<Stack>
				<Text type="h1" data="" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
			</Stack>
		</Flex>
	);
};

export default Mod39;
