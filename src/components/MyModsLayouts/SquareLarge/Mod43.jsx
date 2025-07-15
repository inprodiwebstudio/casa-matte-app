import { Flex, Stack } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
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

	const defaultText01 = "<p style='text-align: right;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Para papá, un homenaje a tu vida. Gracias por tantos años de cariño y amor. Te queremos siempre.</span></p>";

	return (
		<Flex
			pr="10%"
			pb="7%"
			w="100%"
			h="100%"
			align="flex-end"
		>
			<Stack
				w="100%"
				align="flex-end"
				spacing="0.1em"
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<DividerLayout long="10%" position="h" />
				<Stack w="45%">
					<Text
						sizes={{
							"chico"   : "16px",
							"regular" : "18px",
							"grande"  : "20px",
						}}
						sheetNo={sheetNo}
						textShell={() => <TextShell.Body align="flex-end" />}
						align="right"
						lineHeight="28px"
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod43;
