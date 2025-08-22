import {Stack, Flex } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod49 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultTitle = "<p style='text-align: left;'><span style='font-size: 24px; font-family: JosefinSans-Light;'>TÍTULO</span></p>";

	const defaultIndices = "<p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>Índice 1</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>Índice 2</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>Índice 3</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>Índice 4</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>Índice 5</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>Índice 6</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>Índice 7</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>Índice 8</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>Índice 9</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>Índice 10</span></p>";

	return (
		<Flex
			p="10%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
		>
			<Stack
				spacing={isInWorkSpace ? "20px" : "0.12em"}
				sx={{overflow : "hidden", textTransform : "uppercase"}}
				w={isInWorkSpace ? "20%" : "30%"}
			>
				<Stack
					spacing={isInWorkSpace ? "12px" : "0.12em"}
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
				>
					<Text
						sizes={{
							"chico"   : "22px",
							"regular" : "24px",
							"grande"  : "26px",
						}}
						align="left"
						sheetNo={sheetNo}
						letterSpacing="3px"
						textShell={() => <TextShell.TitleSmall width="100%" align="left" />}
						data={textInsertion(data?.text[0], defaultTitle, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
					<DividerLayout long={isInWorkSpace ? "20%" : "20%"} position="h" />
				</Stack>
				<div
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text2` })}
				>
					<Text
						sizes={{
							"chico"   : "12px",
							"regular" : "14px",
							"grande"  : "16px",
						}}
						align="left"
						gapSpacing="16px"
						sheetNo={sheetNo}
						textShell={() => <TextShell.BodyIndices align="left" />}
						data={textInsertion(data?.text[1], defaultIndices, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={1}
					/>
				</div>
			</Stack>
		</Flex>
	);
};

export default Mod49;
