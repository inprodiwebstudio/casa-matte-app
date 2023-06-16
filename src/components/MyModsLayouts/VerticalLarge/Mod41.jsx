import {Stack, Flex } from "@mantine/core";
//Own components
import Text          from "components/LayoutHandler/Text";
import DividerLayout from "components/LayoutHandler/DividerLayout";


const Mod41 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
			gap="0.15em"
			direction="column"
		>
			<DividerLayout long="10%" position="h" />
			<Stack spacing="0.1em">
				<Text type="h1" data="" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
				<Text align="right" type="h5" data="" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
			</Stack>
		</Flex>
	);
};

export default Mod41;
