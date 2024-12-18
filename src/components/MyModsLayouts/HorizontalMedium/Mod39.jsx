import { Flex, Stack } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod39 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultTitle01 = "<p style='text-align: left;'><span style='font-size: 18px; font-family: Aitana-Regular;'>ESPAÑA</span></p>";

	const defaultTitle02 = "<p style='text-align: left;'><span style='font-size: 18px; font-family: Aitana-Regular;'>FRANCIA</span></p>";

	const defaultTitle03 = "<p style='text-align: left;'><span style='font-size: 18px; font-family: Aitana-Regular;'>TURQUÍA</span></p>";

	const defaultIndice01 = "<p style='text-align: left;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Madrid</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Segovia</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Salamanca</span></p>";

	const defaultIndice02 = "<p style='text-align: left;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>París</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Versalles</span></p>";

	const defaultIndice03 = "<p style='text-align: left;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Estambul</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Capadocia</span></p>";

	return (
		<Flex
			w="100%"
			h="100%"
			p="4%"
			justify="flex-end"
			align="flex-end"
			direction="column"
			sx={{overflow : "hidden"}}
		>
			<Stack
				spacing="0.35em"
				miw="20%"
			>
				<Stack
					spacing="0.13em"
					aria-hidden
				>
					<div>
						<Text
							sizes={{
								"chico"   : "16px",
								"regular" : "18px",
								"grande"  : "20px",
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
					</div>
					<div>
						<Text
							sizes={{
								"chico"   : "10px",
								"regular" : "12px",
								"grande"  : "14px",
							}}
							align="left"
							gapSpacing="10px"
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
					spacing="0.13em"
					aria-hidden
				>
					<div>
						<Text
							sizes={{
								"chico"   : "16px",
								"regular" : "18px",
								"grande"  : "20px",
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
					</div>
					<div>
						<Text
							sizes={{
								"chico"   : "10px",
								"regular" : "12px",
								"grande"  : "14px",
							}}
							align="left"
							gapSpacing="10px"
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
					spacing="0.13em"
				>
					<div>
						<Text
							sizes={{
								"chico"   : "16px",
								"regular" : "18px",
								"grande"  : "20px",
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
					</div>
					<div>
						<Text
							sizes={{
								"chico"   : "10px",
								"regular" : "12px",
								"grande"  : "14px",
							}}
							align="left"
							gapSpacing="10px"
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

export default Mod39;
