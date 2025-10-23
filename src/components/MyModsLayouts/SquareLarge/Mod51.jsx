import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod51 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultTitle01 = "<p style='text-align: left;'><span style='font-size: 24px; font-family: JosefinSans-Light;'>ESPAÑA</span></p>";

	const defaultTitle02 = "<p style='text-align: left;'><span style='font-size: 24px; font-family: JosefinSans-Light;'>FRANCIA</span></p>";

	const defaultTitle03 = "<p style='text-align: left;'><span style='font-size: 24px; font-family: JosefinSans-Light;'>TURQUÍA</span></p>";

	const defaultIndice01 = "<p style='text-align: left;'><span style='font-size: 10px; font-family: Inter-Lifght;'>Madrid</span></p><p style='text-align: left;'><span style='font-size: 10px; font-family: Inter-Lifght;'>Segovia</span></p><p style='text-align: left;'><span style='font-size: 10px; font-family: Inter-Lifght;'>Salamanca</span></p>";

	const defaultIndice02 = "<p style='text-align: left;'><span style='font-size: 10px; font-family: Inter-Lifght;'>París</span></p><p style='text-align: left;'><span style='font-size: 10px; font-family: Inter-Lifght;'>Versalles</span></p>";

	const defaultIndice03 = "<p style='text-align: left;'><span style='font-size: 10px; font-family: Inter-Lifght;'>Estambul</span></p><p style='text-align: left;'><span style='font-size: 10px; font-family: Inter-Lifght;'>Capadocia</span></p>";

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
				spacing={isInWorkSpace ? "0.35em" : "0.2em"}
				miw="15%"
				sx={{
					textTransform : "uppercase",
				}}
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<Stack
					spacing={isInWorkSpace ? "10px" : "0.1em"}
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
							letterSpacing="2px"
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
							marginTop : isInWorkSpace ? "8px" : "0px",
						}}
					>
						<Text
							sizes={{
								"chico"   : "18px",
								"regular" : "20px",
								"grande"  : "22px",
							}}
							align="left"
							gapSpacing="10px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.BodyIndices isShortIndices align="left" />}
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
					<div>
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
							data={textInsertion(data?.text[5], defaultTitle02, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={2}
						/>
					</div>
					<DividerLayout long="0.3em" position="h" />
					<div
						style={{
							marginTop : isInWorkSpace ? "8px" : "0px",
						}}
					>
						<Text
							sizes={{
								"chico"   : "18px",
								"regular" : "20px",
								"grande"  : "22px",
							}}
							align="left"
							gapSpacing="10px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.BodyIndices isShortIndices align="left" />}
							data={textInsertion(data?.text[6], defaultIndice02, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={3}
						/>
					</div>
				</Stack>
				<Stack
					spacing={isInWorkSpace ? "10px" : "0.1em"}
				>
					<div>
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
							data={textInsertion(data?.text[5], defaultTitle03, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={4}
						/>
					</div>
					<DividerLayout long="0.3em" position="h" />
					<div
						style={{
							marginTop : isInWorkSpace ? "8px" : "0px",
						}}
					>
						<Text
							sizes={{
								"chico"   : "18px",
								"regular" : "20px",
								"grande"  : "22px",
							}}
							align="left"
							gapSpacing="10px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.BodyIndices isShortIndices align="left" />}
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

export default Mod51;
