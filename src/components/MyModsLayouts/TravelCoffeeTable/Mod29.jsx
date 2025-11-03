import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod29 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultTitle01 = "<p style='text-align: left;'><span style='font-size: 20px; font-family: Aitana-Regular;'>ESPAÑA</span></p>";

	const defaultTitle02 = "<p style='text-align: left;'><span style='font-size: 20px; font-family: Aitana-Regular;'>FRANCIA</span></p>";

	const defaultTitle03 = "<p style='text-align: left;'><span style='font-size: 20px; font-family: Aitana-Regular;'>TURQUÍA</span></p>";

	const defaultIndice01 = "<p style='text-align: left;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Madrid</span></p><p style='text-align: left;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Segovia</span></p><p style='text-align: left;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Salamanca</span></p>";

	const defaultIndice02 = "<p style='text-align: left;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>París</span></p><p style='text-align: left;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Versalles</span></p>";

	const defaultIndice03 = "<p style='text-align: left;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Estambul</span></p><p style='text-align: left;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Capadocia</span></p>";

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
					<div
						style={{
							textTransform : "uppercase",
						}}
					>
						<TextFix
							sizes={{
								"chico"   : "18px",
								"regular" : "20px",
								"grande"  : "24px",
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
					<DividerLayout long="0.3em" position="h" />
					<div
						style={{
							textTransform : "uppercase",
						}}
					>
						<TextFix
							sizes={{
								"chico"   : "12px",
								"regular" : "14px",
								"grande"  : "16px",
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
					<div
						style={{
							textTransform : "uppercase",
						}}
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
					</div>
					<DividerLayout long="0.3em" position="h" />
					<div
						style={{
							textTransform : "uppercase",
						}}
					>
						<TextFix
							sizes={{
								"chico"   : "12px",
								"regular" : "14px",
								"grande"  : "16px",
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
					<div
						style={{
							textTransform : "uppercase",
						}}
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
					</div>
					<DividerLayout long="0.3em" position="h" />
					<div
						style={{
							textTransform : "uppercase",
						}}
					>
						<TextFix
							sizes={{
								"chico"   : "12px",
								"regular" : "14px",
								"grande"  : "16px",
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

export default Mod29;
