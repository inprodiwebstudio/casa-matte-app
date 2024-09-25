import {Stack, Flex } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";

const Mod39 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 42px; font-family: Aitana-Regular;'>TÍTULO 2</span></p>";

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
					sizes={{
						"chico"   : "38px",
						"regular" : "42px",
						"grande"  : "46px",
					}}
					sheetNo={sheetNo}
					letterSpacing="6px"
					textShell={() => <TextShell.Title width="80%" align="flex-end" />}
					data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
				/>
			</Stack>
		</Flex>
	);
};

export default Mod39;
