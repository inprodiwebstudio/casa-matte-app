import { Flex, Stack } from "@mantine/core";
//Own components
import Text          from "components/LayoutHandler/Text";
import DividerLayout from "components/LayoutHandler/DividerLayout";


const Mod43 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
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
			<Stack>
				<Text align="right" type="regular" data="" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
			</Stack>
		</Flex>
	);
};

export default Mod43;
