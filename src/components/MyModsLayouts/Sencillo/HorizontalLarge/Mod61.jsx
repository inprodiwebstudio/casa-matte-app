import {Stack, Flex } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
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

	const defaultText01 = "<p style='text-align: right;'><span style='font-size: 42px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaulSubtTitle = "<p style='text-align: right;'><span style='font-size: 15px; font-family: Inter-Lifght;'>SUBTÍTULO 1</span></p>";

	return (
		<Flex
			p="4%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
		>
			<Stack spacing="0.05em" w="100%">
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
					<Text
						sizes={{
							"chico"   : "38px",
							"regular" : "42px",
							"grande"  : "46px",
						}}
						sheetNo={sheetNo}
						letterSpacing="6px"
						textShell={() => <TextShell.Title />}
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
						paddingRight  : "0%",
						textTransform : "uppercase",
					}}
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text2` })}
				>
					<Text
						sizes={{
							"chico"   : "14px",
							"regular" : "15px",
							"grande"  : "16px",
						}}
						sheetNo={sheetNo}
						letterSpacing="2px"
						textShell={() => <TextShell.SubTitle />}
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
