import { Flex, Stack } from "@mantine/core";
//Own components
import Text          from "components/LayoutHandler/Text";
import DividerLayout from "components/LayoutHandler/DividerLayout";


const Mod44 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
		>
			<Stack
				w="50%"
				mah="70%"
				spacing="0.2em"
				aria-hidden
			>
				<Flex
					direction="column"
					gap="0.05em"
					justify="flex-start"
				>
					<Text align="left" type="h4" data="" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
					<DividerLayout long="40%" position="h" />
				</Flex>
				<Flex justify="flex-start">
					<Text align="left" type="regular" data="" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
				</Flex>
			</Stack>
		</Flex>
	);
};

export default Mod44;
