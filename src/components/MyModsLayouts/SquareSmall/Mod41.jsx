import {Stack, Flex } from "@mantine/core";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
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

	const defaultText01 = "<p style='text-align: right;'><span style='font-size: 30px; font-family: JosefinSans-Light;'>TÍTULO</span></p>";

	const defaulSubtTitle = "<p style='text-align: right;'><span style='font-size: 12px; font-family: Inter-Lifght;'>SUBTÍTULO 2</span></p>";

	return (
		<Flex
			pb="8%"
			pr="10%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
			direction="column"
			gap="0.09em"
		>
			<div
				style={{
					width          : "100%",
					display        : "flex",
					justifyContent : "flex-end",
					marginRight    : isInWorkSpace ? "8px" : "0px",
				}}
			>
				<DividerLayout
					long={isInWorkSpace ? "5%" : "7%"}
					position="h"
					weight={isInWorkSpace ? "2px" : "0.01em"}
				/>
			</div>
			<Stack spacing={isInWorkSpace ? "2px" : "1px"} w="100%">
				<div
					style={{
						width : "100%",
					}}
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
				>
					<TextFix
						sizes={{
							"chico"   : "22px",
							"regular" : "26px",
							"grande"  : "28px",
						}}
						typeText="title"
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
						width        : "100%",
						paddingRight : isInWorkSpace ? "4px" : "0px",
					}}
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text2` })}
				>
					<TextFix
						sizes={{
							"chico"   : "13px",
							"regular" : "15px",
							"grande"  : "18px",
						}}
						typeText="subtitle"
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
