import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod47 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultTitle01 = "<p style='text-align: left;'><span style='font-size: 24px; font-family: JosefinSans-Light;'>TÍTULO</span></p>";

	const defaultTitle02 = "<p style='text-align: left;'><span style='font-size: 24px; font-family: JosefinSans-Light;'>TÍTULO</span></p>";

	const defaultTitle03 = "<p style='text-align: left;'><span style='font-size: 24px; font-family: JosefinSans-Light;'>TÍTULO</span></p>";

	const defaultIndice01 = "<p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>ÍNDICE 1</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>ÍNDICE 2</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>ÍNDICE 3</span></p>";

	const defaultIndice02 = "<p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>ÍNDICE 1</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>ÍNDICE 2</span></p>";

	const defaultIndice03 = "<p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>ÍNDICE 1</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>ÍNDICE 2</span></p>";

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
				spacing={isInWorkSpace ? "50px" : "0.3em"}
				miw={isInWorkSpace ? "10%" : "30%"}
				sx={{
					textTransform : "uppercase",
				}}
			>
				<Stack
					spacing={isInWorkSpace ? "15px" : "0.13em"}
					aria-hidden
				>
					<Stack
						spacing={isInWorkSpace ? "11px" : "0.13em"}
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
						<DividerLayout long="0.3em" position="h" />
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
					spacing={isInWorkSpace ? "15px" : "0.13em"}
					aria-hidden
				>
					<Stack
						spacing={isInWorkSpace ? "11px" : "0.13em"}
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
						<DividerLayout long="0.3em" position="h" />
					</Stack>
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
					spacing={isInWorkSpace ? "15px" : "0.13em"}
				>
					<Stack
						spacing={isInWorkSpace ? "11px" : "0.13em"}
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
						<DividerLayout long="0.3em" position="h" />
					</Stack>
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

export default Mod47;
