import { Flex, Stack } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod63 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultTitle01 = "<p style='text-align: left;'><span style='font-size: 24px; font-family: Aitana-Regular;'>ESPAÑA</span></p>";

	const defaultTitle02 = "<p style='text-align: left;'><span style='font-size: 24px; font-family: Aitana-Regular;'>FRANCIA</span></p>";

	const defaultTitle03 = "<p style='text-align: left;'><span style='font-size: 24px; font-family: Aitana-Regular;'>TURQUÍA</span></p>";

	const defaultIndice01 = "<p style='text-align: left;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Madrid</span></p><p style='text-align: left;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Segovia</span></p><p style='text-align: left;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Salamanca</span></p>";

	const defaultIndice02 = "<p style='text-align: left;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>París</span></p><p style='text-align: left;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Versalles</span></p>";

	const defaultIndice03 = "<p style='text-align: left;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Estambul</span></p><p style='text-align: left;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Capadocia</span></p>";

	return (
		<Flex
			w="100%"
			h="100%"
			p="4%"
			justify="center"
			align="center"
			direction="column"
			sx={{overflow : "hidden"}}
		>
			<Stack
				spacing={isInWorkSpace ? "40px" : "0.4em"}
				miw="16%"
				w={isInWorkSpace ? "auto" : "20%"}
			>
				<Stack
					spacing={isInWorkSpace ? "10px" : "0.1em"}
					aria-hidden
				>
					<div
						style={{
							textTransform : "uppercase",
						}}
						{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
					>
						<Text
							sizes={{
								"chico"   : "22px",
								"regular" : "24px",
								"grande"  : "26px",
							}}
							align="left"
							letterSpacing="2px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.TitleSmall width="100%" align="left" />}
							data={textInsertion(data?.text[0], defaultTitle01, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={0}
						/>
					</div>
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
					spacing={isInWorkSpace ? "10px" : "0.1em"}
					aria-hidden
				>
					<div
						style={{
							textTransform : "uppercase",
						}}
						{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text3` })}
					>
						<Text
							sizes={{
								"chico"   : "22px",
								"regular" : "24px",
								"grande"  : "26px",
							}}
							align="left"
							letterSpacing="2px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.TitleSmall width="100%" align="left" />}
							data={textInsertion(data?.text[2], defaultTitle02, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={2}
						/>
					</div>
					<div
						{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text4` })}

					>
						<Text
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
					spacing={isInWorkSpace ? "10px" : "0.1em"}
					aria-hidden
				>
					<div
						style={{
							textTransform : "uppercase",
						}}
						{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text5` })}
					>
						<Text
							sizes={{
								"chico"   : "22px",
								"regular" : "24px",
								"grande"  : "26px",
							}}
							align="left"
							letterSpacing="2px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.TitleSmall width="100%" align="left" />}
							data={textInsertion(data?.text[4], defaultTitle03, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={4}
						/>
					</div>
					<div
						{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text6` })}
					>
						<Text
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

export default Mod63;
