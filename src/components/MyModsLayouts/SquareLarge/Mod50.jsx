import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod50 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultTitle01 = "<p style='text-align: left;'><span style='font-size: 34px; font-family: Aitana-Regular;'>ESPAÑA</span></p>";

	const defaultTitle02 = "<p style='text-align: left;'><span style='font-size: 34px; font-family: Aitana-Regular;'>FRANCIA</span></p>";

	const defaultTitle03 = "<p style='text-align: left;'><span style='font-size: 34px; font-family: Aitana-Regular;'>TURQUÍA</span></p>";

	const defaultIndice01 = "<p style='text-align: left;'><span style='font-size: 23px; font-family: Spectral-Light-Italic;'>Madrid</span></p><p style='text-align: left;'><span style='font-size: 23px; font-family: Spectral-Light-Italic;'>Segovia</span></p><p style='text-align: left;'><span style='font-size: 23px; font-family: Spectral-Light-Italic;'>Salamanca</span></p>";

	const defaultIndice02 = "<p style='text-align: left;'><span style='font-size: 23px; font-family: Spectral-Light-Italic;'>París</span></p><p style='text-align: left;'><span style='font-size: 23px; font-family: Spectral-Light-Italic;'>Versalles</span></p>";

	const defaultIndice03 = "<p style='text-align: left;'><span style='font-size: 23px; font-family: Spectral-Light-Italic;'>Estambul</span></p><p style='text-align: left;'><span style='font-size: 23px; font-family: Spectral-Light-Italic;'>Capadocia</span></p>";

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
				miw="30%"
			>
				<Stack
					spacing="0.13em"
					aria-hidden
				>
					<div>
						<Text
							sizes={{
								"chico"   : "32px",
								"regular" : "34px",
								"grande"  : "36px",
							}}
							align="left"
							letterSpacing="3px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.TitleSmall width="100%" align="left" />}
							data={textInsertion(data?.text[0], defaultTitle01, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
						/>
					</div>
					<DividerLayout long="0.3em" position="h" />
					<div>
						<Text
							sizes={{
								"chico"   : "21px",
								"regular" : "23px",
								"grande"  : "25px",
							}}
							align="left"
							gapSpacing="10px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.BodyIndices align="left" />}
							data={textInsertion(data?.text[1], defaultIndice01, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
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
								"chico"   : "32px",
								"regular" : "34px",
								"grande"  : "36px",
							}}
							align="left"
							letterSpacing="3px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.TitleSmall width="100%" align="left" />}
							data={textInsertion(data?.text[5], defaultTitle02, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
						/>
					</div>
					<DividerLayout long="0.3em" position="h" />
					<div>
						<Text
							sizes={{
								"chico"   : "21px",
								"regular" : "23px",
								"grande"  : "25px",
							}}
							align="left"
							gapSpacing="10px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.BodyIndices align="left" />}
							data={textInsertion(data?.text[6], defaultIndice02, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
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
								"chico"   : "32px",
								"regular" : "34px",
								"grande"  : "36px",
							}}
							align="left"
							letterSpacing="3px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.TitleSmall width="100%" align="left" />}
							data={textInsertion(data?.text[5], defaultTitle03, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
						/>
					</div>
					<DividerLayout long="0.3em" position="h" />
					<div>
						<Text
							sizes={{
								"chico"   : "21px",
								"regular" : "23px",
								"grande"  : "25px",
							}}
							align="left"
							gapSpacing="10px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.BodyIndices align="left" />}
							data={textInsertion(data?.text[6], defaultIndice03, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
						/>
					</div>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod50;
