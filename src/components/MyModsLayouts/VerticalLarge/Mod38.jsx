import {Stack, Flex } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod38 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: right;'><span style='font-size: 42px; font-family: JosefinSans-Light;'>TÍTULO</span></p>";

	const defaulSubtTitle = "<p style='text-align: right;'><span style='font-size: 16px; font-family: Inter-Lifght;'>SUBTÍTULO 2</span></p>";

	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
			gap={isInWorkSpace ? "2%" : "5%"}
			direction="column"
		>
			<Flex
				w="100%"
				justify="flex-end"
				pr={isInWorkSpace ? "10px" : "0px"}
			>
				<DividerLayout
					long={isInWorkSpace ? "6.5%" : "15%"}
					position="h"
					weight={isInWorkSpace ? "2px" : "0.015em"}
				/>
			</Flex>
			<Stack
				spacing={isInWorkSpace ? "5px" : "0.05em"}
				w="100%"
			>
				<div
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
				>
					<Text
						sizes={{
							"chico"   : "38px",
							"regular" : "42px",
							"grande"  : "46px",
						}}
						align="right"
						sheetNo={sheetNo}
						letterSpacing="6px"
						textShell={() => <TextShell.Title width="40%" align="flex-end" />}
						isInPaginator={isInPaginator}
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
				</div>
				<div
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text2` })}
					style={{
						paddingRight : isInWorkSpace ? "8px" : "0px",
					}}
				>
					<Text
						sizes={{
							"chico"   : "14px",
							"regular" : "15px",
							"grande"  : "16px",
						}}
						align="right"
						sheetNo={sheetNo}
						letterSpacing="2px"
						textShell={() => <TextShell.SubTitle width="20%" align="flex-end" />}
						data={textInsertion(data?.text[1], defaulSubtTitle, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={1}
					/>
				</div>
			</Stack>
		</Flex>
	);
};

export default Mod38;
