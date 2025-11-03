import {Stack, Flex } from "@mantine/core";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";

const Mod61 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: right;'><span style='font-size: 36px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaulSubtTitle = "<p style='text-align: right;'><span style='font-size: 14px; font-family: Inter-Lifght;'>SUBTÍTULO 1</span></p>";

	return (
		<Flex
			p={isInWorkSpace ? "50px" : "10%"}
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
		>
			<Stack
				spacing={isInWorkSpace ? "3px" : "0.1em" }
				w="100%"
			>
				<div
					style={{
						width         : "100%",
						paddingLeft   : "10%",
						paddingRight  : "0%",
						maxHeight     : "100px",
						textTransform : "uppercase",
					 }}
					 {...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
				>
					<TextFix
						sizes={{
							"chico"   : "38px",
							"regular" : "42px",
							"grande"  : "46px",
						}}
						sheetNo={sheetNo}
						letterSpacing="6px"
						textShell={() => <TextShell.Title align="flex-end" />}
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
				</div>
				<div
					style={{
						width         : "100%",
						paddingLeft   : "20%",
						textTransform : "uppercase",
						paddingRight  : isInWorkSpace ? "5px" : "0px",
					}}
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text2` })}
				>
					<TextFix
						sizes={{
							"chico"   : "14px",
							"regular" : "15px",
							"grande"  : "16px",
						}}
						sheetNo={sheetNo}
						letterSpacing="3px"
						textShell={() => <TextShell.SubTitle align="flex-end" />}
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

export default Mod61;
