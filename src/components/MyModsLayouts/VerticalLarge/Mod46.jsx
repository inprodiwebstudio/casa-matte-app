import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod46 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultTitle01 = "<p style='text-align: left;'><span style='font-size: 24px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaultTitle02 = "<p style='text-align: left;'><span style='font-size: 24px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaultTitle03 = "<p style='text-align: left;'><span style='font-size: 24px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaultIndice01 = "<p style='text-align: left;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Índice 1</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Índice 2</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Índice 3</span></p>";

	const defaultIndice02 = "<p style='text-align: left;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Índice 1</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Índice 2</span></p>";

	const defaultIndice03 = "<p style='text-align: left;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Índice 1</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Índice 2</span></p>";

	return (
		<Flex
			w="100%"
			h="100%"
			justify="center"
			align="center"
			direction="column"
			sx={{overflow : "hidden"}}
		>
			<Stack
				spacing="0.35em"
				miw={isInWorkSpace ? "12%" : "30%"}
			>
				<Stack
					spacing={isInWorkSpace ? "0.13em" : "0.1em"}
					aria-hidden
				>
					<Stack
						spacing={isInWorkSpace ? "0.12em" : "0.1em"}
						{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
					>
						<TextFix
							sizes={{
								"chico"   : "22px",
								"regular" : "24px",
								"grande"  : "26px",
							}}
							align="left"
							letterSpacing="3px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.TitleSmall width="100%" align="left" />}
							data={textInsertion(data?.text[0], defaultTitle01, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={0}
						/>
						<DividerLayout long="0.3em" position="h" />
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
							align="left"
							gapSpacing="8px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.BodyIndices align="left" />}
							data={textInsertion(data?.text[1], defaultIndice01, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={1}
						/>
					</div>
				</Stack>
				<Stack
					spacing={isInWorkSpace ? "0.13em" : "0.1em"}
					aria-hidden
				>
					<Stack
						spacing={isInWorkSpace ? "0.12em" : "0.09em"}
						{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text3` })}
					>
						<TextFix
							sizes={{
								"chico"   : "22px",
								"regular" : "24px",
								"grande"  : "26px",
							}}
							align="left"
							letterSpacing="3px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.TitleSmall width="100%" align="left" />}
							data={textInsertion(data?.text[2], defaultTitle02, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={2}
						/>
						<DividerLayout long="0.3em" position="h" />
					</Stack>
					<div
						{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text4` })}
					>
						<TextFix
							sizes={{
								"chico"   : "12px",
								"regular" : "14px",
								"grande"  : "16px",
							}}
							align="left"
							gapSpacing="8px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.BodyIndices align="left" />}
							data={textInsertion(data?.text[3], defaultIndice02, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={3}
						/>
					</div>
				</Stack>
				<Stack
					mah="70%"
					spacing={isInWorkSpace ? "0.13em" : "0.1em"}
				>
					<Stack
						spacing={isInWorkSpace ? "0.12em" : "0.1em"}
						{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text5` })}
					>
						<TextFix
							sizes={{
								"chico"   : "22px",
								"regular" : "24px",
								"grande"  : "26px",
							}}
							align="left"
							letterSpacing="3px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.TitleSmall width="100%" align="left" />}
							data={textInsertion(data?.text[4], defaultTitle03, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={4}
						/>
						<DividerLayout long="0.3em" position="h" />
					</Stack>
					<div
						{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text6` })}
					>
						<TextFix
							sizes={{
								"chico"   : "12px",
								"regular" : "14px",
								"grande"  : "16px",
							}}
							align="left"
							gapSpacing="8px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.BodyIndices align="left" />}
							data={textInsertion(data?.text[5], defaultIndice03, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={5}
						/>
					</div>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod46;
