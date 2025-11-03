import {Stack, Flex } from "@mantine/core";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";

const Mod39 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: right;'><span style='font-size: 46px; font-family: Aitana-Regular;'>TÍTULO 2</span></p>";

	return (
		<Flex
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
			pb={isInWorkSpace ? "5%" : "10%"}
			pr="10%"
		>
			<Stack
				w={"70%"}
				align={isThumbNail ? "flex-end" : undefined}
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<TextFix
					sizes={{
						"chico"   : "42px",
						"regular" : "46px",
						"grande"  : "48px",
					}}
					sheetNo={sheetNo}
					letterSpacing="6px"
					textShell={() => <TextShell.Title width="80%" align="flex-end" />}
					data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
					textNo={0}
				/>
			</Stack>
		</Flex>
	);
};

export default Mod39;
