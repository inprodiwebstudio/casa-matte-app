import {Stack, Flex } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";

const Mod38 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultText01 = "<p style='text-align: right;'><span style='font-size: 30px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaulSubtTitle = "<p style='text-align: right;'><span style='font-size: 12px; font-family: Inter-Light;'>SUBTÍTULO 1</span></p>";

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
						width        : "100%",
						paddingLeft  : "10%",
						paddingRight : "0%",
						maxHeight    : "100px",
					 }}
				>
					<Text
						sizes={{
							"chico"   : "28px",
							"regular" : "30px",
							"grande"  : "32px",
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
						width        : "100%",
						paddingLeft  : "20%",
						paddingRight : "0%",
					}}>
					<Text
						sizes={{
							"chico"   : "10px",
							"regular" : "12px",
							"grande"  : "14px",
						}}
						sheetNo={sheetNo}
						letterSpacing="2px"
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

export default Mod38;
