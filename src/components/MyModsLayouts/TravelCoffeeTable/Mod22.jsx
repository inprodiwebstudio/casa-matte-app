import { Flex, Stack } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod22 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultText01 = "<p style='text-align: right;'><span style='font-size: 12px; font-family: JosefinSans-Light;'>Quisque at malesuada dolor. Nullam in eleifend est. In dolor dui, egestas id blandit eget...</span></p>";

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
			<DividerLayout long="5%" position="h" />
			<Stack
				w="70%"
				sx={{
					textTransform : "uppercase",
				}}
			>
				<Text
					sizes={{
						"chico"   : "11px",
						"regular" : "12px",
						"grande"  : "13px",
					}}
					sheetNo={sheetNo}
					textShell={() => <TextShell.Body align="flex-end" />}
					align="right"
					lineHeight="14px"
					data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
					textNo={0}
				/>
			</Stack>
		</Flex>
	);
};

export default Mod22;
