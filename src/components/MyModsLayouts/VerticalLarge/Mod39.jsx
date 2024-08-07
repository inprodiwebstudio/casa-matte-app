import {Stack, Flex } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import { textInsertion } from "helpers";

const Mod39 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultText01 = "";

	return (
		<Flex
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
			p="3%"
		>
			<Stack
				w={"50%"}
				align={isThumbNail ? "flex-end" : undefined}
			>
				<Text
					type="h1"
					sheetNo={sheetNo}
					data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
				/>
			</Stack>
		</Flex>
	);
};

export default Mod39;
