import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod50 = ({
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

	const defaultIndice01 = "<p style='text-align: left;'><span style='font-size: 10px; font-family: Spectral-Light-Italic;'>Madrid</span></p><p style='text-align: left;'><span style='font-size: 10px; font-family: Spectral-Light-Italic;'>Segovia</span></p><p style='text-align: left;'><span style='font-size: 10px; font-family: Spectral-Light-Italic;'>Salamanca</span></p>";

	const defaultIndice02 = "<p style='text-align: left;'><span style='font-size: 10px; font-family: Spectral-Light-Italic;'>París</span></p><p style='text-align: left;'><span style='font-size: 10px; font-family: Spectral-Light-Italic;'>Versalles</span></p>";

	const defaultIndice03 = "<p style='text-align: left;'><span style='font-size: 10px; font-family: Spectral-Light-Italic;'>Estambul</span></p><p style='text-align: left;'><span style='font-size: 10px; font-family: Spectral-Light-Italic;'>Capadocia</span></p>";

	return (
		<Flex
			w="100%"
			h="100%"
			justify="center"
			align="center"
			direction="column"
			sx={{overflow : "hidden"}}
			pr="5%"
			pl="42%"
		>
			<Stack
				spacing={isInWorkSpace ? "40px" : "0.2em"}
				w="100%"
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<Stack
					spacing={isInWorkSpace ? "15px" : "0.13em"}
					aria-hidden
				>
					<div>
						<TextFix
							sizes={{
								"chico"   : "32px",
								"regular" : "34px",
								"grande"  : "36px",
							}}
							align="left"
							letterSpacing="3px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.TitleSmall width="60%" align="left" />}
							data={textInsertion(data?.text[0], defaultTitle01, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={0}
						/>
					</div>
					<DividerLayout long="0.3em" position="h" />
					<div>
						<TextFix
							sizes={{
								"chico"   : "21px",
								"regular" : "23px",
								"grande"  : "25px",
							}}
							align="left"
							gapSpacing="5px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.BodyIndices width="50%" align="left" />}
							data={textInsertion(data?.text[1], defaultIndice01, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={1}
						/>
					</div>
				</Stack>
				<Stack
					spacing={isInWorkSpace ? "15px" : "0.13em"}
					aria-hidden
				>
					<div>
						<TextFix
							sizes={{
								"chico"   : "32px",
								"regular" : "34px",
								"grande"  : "36px",
							}}
							align="left"
							letterSpacing="3px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.TitleSmall width="60%" align="left" />}
							data={textInsertion(data?.text[5], defaultTitle02, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={2}
						/>
					</div>
					<DividerLayout long="0.3em" position="h" />
					<div>
						<TextFix
							sizes={{
								"chico"   : "21px",
								"regular" : "23px",
								"grande"  : "25px",
							}}
							align="left"
							gapSpacing="5px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.BodyIndices width="50%" align="left" />}
							data={textInsertion(data?.text[6], defaultIndice02, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={3}
						/>
					</div>
				</Stack>
				<Stack
					spacing={isInWorkSpace ? "15px" : "0.13em"}
				>
					<div>
						<TextFix
							sizes={{
								"chico"   : "32px",
								"regular" : "34px",
								"grande"  : "36px",
							}}
							align="left"
							letterSpacing="3px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.TitleSmall width="60%" align="left" />}
							data={textInsertion(data?.text[5], defaultTitle03, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={4}
						/>
					</div>
					<DividerLayout long="0.3em" position="h" />
					<div>
						<TextFix
							sizes={{
								"chico"   : "21px",
								"regular" : "23px",
								"grande"  : "25px",
							}}
							align="left"
							gapSpacing="5px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.BodyIndices width="50%" align="left" />}
							data={textInsertion(data?.text[6], defaultIndice03, isInWorkSpace)}
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

export default Mod50;
