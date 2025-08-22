
import {Stack, Flex } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";

const FrontMod8 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const defaultText01 = "<p style='text-align: right;'><span style='font-size: 28px; font-family: Inter-Lifght;'>TÍTULO PRINCIPAL</span></p>";

	const defaultText02 = "<p style='text-align: right;'><span style='font-size: 14px; font-family: Inter-Lifght;'>SUBTÍTULO</span></p>";

	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="flex-end"
			gap="0.2em"
			direction="column"
		>
			<Stack
				spacing={(isInPaginator || isThumbNail) ? "1px" : "0px"}
				w={"100%"}
				align="flex-end"
			>
				<Stack w="100%">
					<Text
						sizes={{
							"chico"   : "38px",
							"regular" : "42px",
							"grande"  : "44px",
						}}
						isFront={true}
						align="right"
						sheetNo={sheetNo}
						textShell={() => <TextShell.Title width="73%" />}
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
				</Stack>
				<Stack w="50%">
					<Text
						sizes={{
							"chico"   : "16px",
							"regular" : "18px",
							"grande"  : "20px",
						}}
						isFront={true}
						align="right"
						sheetNo={sheetNo}
						textShell={() => <TextShell.SubTitle />}
						data={textInsertion(data?.text[1], defaultText02, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={1}
					/>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default FrontMod8;
