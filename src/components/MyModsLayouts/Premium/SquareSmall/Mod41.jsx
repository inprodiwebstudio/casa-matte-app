import {Stack, Flex } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod41 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: right;'><span style='font-size: 26px; font-family: JosefinSans-Light;'>TÍTULO</span></p>";

	const defaulSubtTitle = "<p style='text-align: right;'><span style='font-size: 15px; font-family: Inter-Lifght;'>SUBTÍTULO 2</span></p>";

	return (
		<Flex
			pb="6%"
			pr="10%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
			direction="column"
			gap="0.09em"
		>
			<DividerLayout long="7%" position="h" />
			<Stack spacing="0px" w="100%">
				<div
					style={{
						width : "100%",
					}}
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
				>
					<Text
						sizes={{
							"chico"   : "22px",
							"regular" : "26px",
							"grande"  : "28px",
						}}
						align="right"
						sheetNo={sheetNo}
						letterSpacing="4px"
						textShell={() => <TextShell.Title width="40%" align="flex-end" />}
						isInPaginator={isInPaginator}
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
				</div>
				<div
					style={{
						width : "100%",
					}}
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text2` })}
				>
					<Text
						sizes={{
							"chico"   : "13px",
							"regular" : "15px",
							"grande"  : "18px",
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

export default Mod41;
