import { Flex, Stack } from "@mantine/core";
//Own components
import Text          from "components/LayoutHandler/Text";
import DividerLayout from "components/LayoutHandler/DividerLayout";


const Mod43 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const handleWidthTextContainer = () => {
		if (isThumbNail) {
			return "41px";
		}
		if (isInPaginator) {
			return "99px";
		}
		if (isInWorkSpace) {
			return "180px";
		}
	};
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
			<Stack w={handleWidthTextContainer()}>
				<Text align="right" type="regular" data="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..." isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
			</Stack>
		</Flex>
	);
};

export default Mod43;
