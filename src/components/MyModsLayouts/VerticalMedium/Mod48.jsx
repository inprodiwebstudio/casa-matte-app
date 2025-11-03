import {Stack, Flex } from "@mantine/core";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod48 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultTitle = "<p style='text-align: left;'><span style='font-size: 20px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaultIndices = "<p style='text-align: left;'><span style='font-size: 8px; font-family: Spectral-Light-Italic;'>Índice 1</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Spectral-Light-Italic;'>Índice 2</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Spectral-Light-Italic;'>Índice 3</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Spectral-Light-Italic;'>Índice 4</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Spectral-Light-Italic;'>Índice 5</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Spectral-Light-Italic;'>Índice 6</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Spectral-Light-Italic;'>Índice 7</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Spectral-Light-Italic;'>Índice 8</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Spectral-Light-Italic;'>Índice 9</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Spectral-Light-Italic;'>Índice 10</span></p>";

	return (
		<Flex
			pr="8%"
			pb="8%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
		>
			<Stack
				spacing="0.2em"
				sx={{overflow : "hidden"}}
				maw="60%"
				miw={isInWorkSpace ? "18%" : "30%"}
			>
				<Stack
					spacing="0.14em"
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
				>
					<TextFix
						sizes={{
							"chico"   : "22px",
							"regular" : "24px",
							"grande"  : "26px",
						}}
						typeText="subtitle"
						align="left"
						sheetNo={sheetNo}
						letterSpacing="3px"
						textShell={() => <TextShell.TitleSmall width="100%" align="left" />}
						data={textInsertion(data?.text[0], defaultTitle, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
					<DividerLayout weight={isInWorkSpace ? "0.2px" : "0.01em"} long="20%" position="h" />
				</Stack>
				<div
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text2` })}
				>
					<TextFix
						sizes={{
							"chico"   : "12px",
							"regular" : "14px",
							"grande"  : "16px",
						}}
						typeText="index"
						align="left"
						gapSpacing="10px"
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

export default Mod48;
