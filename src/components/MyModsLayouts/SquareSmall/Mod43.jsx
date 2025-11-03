import { Flex, Stack } from "@mantine/core";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod43 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: right;'><span style='font-size: 10px; font-family: Spectral-Light-Italic;'>Para papá, un homenaje a tu vida. Gracias por tantos años de cariño y amor. Te queremos siempre.</span></p>";

	return (
		<Flex
			pr="10%"
			pb="8%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
			gap={isInWorkSpace ? "15px" : "5%"}
			direction="column"
		>
			<DividerLayout
				long={isInWorkSpace ? "5%" : "10%"}
				weight={isInWorkSpace ? "2px" : "0.01em"}
				position="h"
			/>
			<Stack
				w="37%"
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<TextFix
					sizes={{
						"chico"   : "8px",
						"regular" : "10px",
						"grande"  : "13px",
					}}
					typeText="body"
					sheetNo={sheetNo}
					textShell={() => <TextShell.Body align="flex-end" />}
					align="right"
					lineHeight="10px"
					data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
					textNo={0}
				/>
			</Stack>
		</Flex>
	);
};

export default Mod43;
