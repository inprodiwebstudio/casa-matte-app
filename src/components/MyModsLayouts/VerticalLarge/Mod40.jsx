import {Stack, Flex, Center } from "@mantine/core";
//Own components
import Text from "components/LayoutHandler/Text";

const Mod40 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
		>
			<Center w="100%" h="100%">
				<Stack spacing="0.03em">
					<Text type="h1" data="" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
					<Text type="h5" data="" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
				</Stack>
			</Center>
		</Flex>
	);
};

export default Mod40;
