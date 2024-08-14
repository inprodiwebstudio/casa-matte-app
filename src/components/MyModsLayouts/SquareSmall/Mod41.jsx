import {Stack, Flex } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";


const Mod41 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultText01 = "";

	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
			gap="0.1em"
			direction="column"
		>
			<DividerLayout long="7%" position="h" />
			<Stack spacing="0.1em" w="100%">
				<Text
					align="right"
					type="h1"
					sheetNo={sheetNo}
					isInPaginator={isInPaginator}
					data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
					isThumbNail={isThumbNail}
				/>
				<div>
					<Text
						align="right"
						type="h5"
						sheetNo={sheetNo}
						data={textInsertion(data?.text[1], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
					/>
				</div>
			</Stack>
		</Flex>
	);
};

export default Mod41;
