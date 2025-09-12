import { Flex, Stack } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod40 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: right;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Para papá, un homenaje a tu vida. Gracias por tantos años de cariño y amor. Te queremos siempre.</span></p>";

	return (
		<Flex
			pr="8%"
			pb="8%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
			gap={isInWorkSpace ? "2%" : "0.2em"}
			direction="column"
		>
			<DividerLayout
				long={isInWorkSpace ? "5.5%" : "0.5em"}
				position="h"
				weight={isInWorkSpace ? "2.2px" : "0.015em"}
			/>
			<Stack
				w="47%"
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
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

export default Mod40;
