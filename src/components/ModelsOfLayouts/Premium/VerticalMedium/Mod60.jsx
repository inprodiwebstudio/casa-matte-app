import { Flex, Group, Stack } from "@mantine/core";
import DividerLayout          from "components/LayoutHandler/DividerLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod60 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultTitle01 = "<p style='text-align: left;'><span style='font-size: 16px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaultTitle02 = "<p style='text-align: left;'><span style='font-size: 16px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaultTitle03 = "<p style='text-align: left;'><span style='font-size: 16px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaultIndice01 = "<p style='text-align: left;'><span style='font-size: 8px; font-family: Inter-Lifght;'>ÍNDICE 1</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Inter-Lifght;'>ÍNDICE 2</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Inter-Lifght;'>ÍNDICE 3</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Inter-Lifght;'>ÍNDICE 4</span></p>";

	const defaultIndice02 = "<p style='text-align: left;'><span style='font-size: 8px; font-family: Inter-Lifght;'>ÍNDICE 1</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Inter-Lifght;'>ÍNDICE 2</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Inter-Lifght;'>ÍNDICE 3</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Inter-Lifght;'>ÍNDICE 4</span></p>";

	const defaultIndice03 = "<p style='text-align: left;'><span style='font-size: 8px; font-family: Inter-Lifght;'>ÍNDICE 1</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Inter-Lifght;'>ÍNDICE 2</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Inter-Lifght;'>ÍNDICE 3</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Inter-Lifght;'>ÍNDICE 4</span></p>";

	const defaultTitle04 = "<p style='text-align: left;'><span style='font-size: 16px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaultTitle05 = "<p style='text-align: left;'><span style='font-size: 16px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaultTitle06 = "<p style='text-align: left;'><span style='font-size: 16px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaultIndice04 = "<p style='text-align: left;'><span style='font-size: 8px; font-family: Inter-Lifght;'>ÍNDICE 1</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Inter-Lifght;'>ÍNDICE 2</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Inter-Lifght;'>ÍNDICE 3</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Inter-Lifght;'>ÍNDICE 4</span></p>";

	const defaultIndice05 = "<p style='text-align: left;'><span style='font-size: 8px; font-family: Inter-Lifght;'>ÍNDICE 1</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Inter-Lifght;'>ÍNDICE 2</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Inter-Lifght;'>ÍNDICE 3</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Inter-Lifght;'>ÍNDICE 4</span></p>";

	const defaultIndice06 = "<p style='text-align: left;'><span style='font-size: 8px; font-family: Inter-Lifght;'>ÍNDICE 1</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Inter-Lifght;'>ÍNDICE 2</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Inter-Lifght;'>ÍNDICE 3</span></p><p style='text-align: left;'><span style='font-size: 8px; font-family: Inter-Lifght;'>ÍNDICE 4</span></p>";

	return (
		<Flex
			w="100%"
			h="100%"
			justify="center"
			align="center"
			direction="column"
			sx={{overflow : "hidden"}}
		>
			<Group w="100%" justify="center" position="center" spacing={isInWorkSpace ? "0.7em" : "0.15em"}>
				<Stack
					spacing="0.35em"
					miw={isInWorkSpace ? "10%" : "30%"}
				>
					<Stack
						spacing={isInWorkSpace ? "15px" : "0.15em"}
						aria-hidden
					>
						<Stack
							spacing={isInWorkSpace ? "12px" : "0.15em"}
							{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
						>
							<Text
								sizes={{
									"chico"   : "22px",
									"regular" : "24px",
									"grande"  : "26px",
								}}
								typeText="subtitle"
								align="left"
								letterSpacing="1.5px"
								sheetNo={sheetNo}
								textShell={() => <TextShell.TitleSmall width="100%" align="left" />}
								data={textInsertion(data?.text[0], defaultTitle01, isInWorkSpace)}
								isInPaginator={isInPaginator}
								isThumbNail={isThumbNail}
								textNo={0}
							/>
							<DividerLayout long={isInWorkSpace ? "0.2em" : "0.3em"} position="h" />
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
								typeText="index"
								align="left"
								gapSpacing="10px"
								letterSpacing={"1px"}
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
						spacing={isInWorkSpace ? "15px" : "0.15em"}
						aria-hidden
					>
						<Stack
							spacing={isInWorkSpace ? "12px" : "0.15em"}
							{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text3` })}
						>
							<Text
								sizes={{
									"chico"   : "22px",
									"regular" : "24px",
									"grande"  : "26px",
								}}
								typeText="subtitle"
								align="left"
								letterSpacing="1.5px"
								sheetNo={sheetNo}
								textShell={() => <TextShell.TitleSmall width="100%" align="left" />}
								data={textInsertion(data?.text[2], defaultTitle02, isInWorkSpace)}
								isInPaginator={isInPaginator}
								isThumbNail={isThumbNail}
								textNo={2}
							/>
							<DividerLayout long={isInWorkSpace ? "0.2em" : "0.3em"} position="h" />
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
								typeText="index"
								align="left"
								gapSpacing="10px"
								letterSpacing={"1px"}
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
						spacing={isInWorkSpace ? "15px" : "0.15em"}
						aria-hidden
					>
						<Stack
							spacing={isInWorkSpace ? "12px" : "0.15em"}
							{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text5` })}
						>
							<Text
								sizes={{
									"chico"   : "22px",
									"regular" : "24px",
									"grande"  : "26px",
								}}
								typeText="subtitle"
								align="left"
								letterSpacing="1.5px"
								sheetNo={sheetNo}
								textShell={() => <TextShell.TitleSmall width="100%" align="left" />}
								data={textInsertion(data?.text[4], defaultTitle03, isInWorkSpace)}
								isInPaginator={isInPaginator}
								isThumbNail={isThumbNail}
								textNo={4}
							/>
							<DividerLayout long={isInWorkSpace ? "0.2em" : "0.3em"} position="h" />
						</Stack>
						<div
							{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text12` })}
						>
							<Text
								sizes={{
									"chico"   : "12px",
									"regular" : "14px",
									"grande"  : "16px",
								}}
								typeText="index"
								align="left"
								gapSpacing="10px"
								sheetNo={sheetNo}
								letterSpacing={"1px"}
								textShell={() => <TextShell.BodyIndices align="left" />}
								data={textInsertion(data?.text[5], defaultIndice03, isInWorkSpace)}
								isInPaginator={isInPaginator}
								isThumbNail={isThumbNail}
								textNo={5}
							/>
						</div>
					</Stack>
				</Stack>
				<Stack
					spacing="0.35em"
					miw={isInWorkSpace ? "11%" : "30%"}
				>
					<Stack
						spacing={isInWorkSpace ? "15px" : "0.15em"}
						aria-hidden
					>
						<Stack
							spacing={isInWorkSpace ? "12px" : "0.15em"}
							{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text7` })}
						>
							<Text
								sizes={{
									"chico"   : "22px",
									"regular" : "24px",
									"grande"  : "26px",
								}}
								typeText="subtitle"
								align="left"
								letterSpacing="1.5px"
								sheetNo={sheetNo}
								textShell={() => <TextShell.TitleSmall width="100%" align="left" />}
								data={textInsertion(data?.text[0], defaultTitle04, isInWorkSpace)}
								isInPaginator={isInPaginator}
								isThumbNail={isThumbNail}
								textNo={0}
							/>
							<DividerLayout long={isInWorkSpace ? "0.2em" : "0.3em"} position="h" />
						</Stack>
						<div
							{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text8` })}
						>
							<Text
								sizes={{
									"chico"   : "12px",
									"regular" : "14px",
									"grande"  : "16px",
								}}
								typeText="index"
								align="left"
								gapSpacing="10px"
								letterSpacing={"1px"}
								sheetNo={sheetNo}
								textShell={() => <TextShell.BodyIndices align="left" />}
								data={textInsertion(data?.text[1], defaultIndice04, isInWorkSpace)}
								isInPaginator={isInPaginator}
								isThumbNail={isThumbNail}
								textNo={1}
							/>
						</div>
					</Stack>
					<Stack
						spacing={isInWorkSpace ? "15px" : "0.15em"}
						aria-hidden
					>
						<Stack
							spacing={isInWorkSpace ? "12px" : "0.15em"}
							{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text9` })}
						>
							<Text
								sizes={{
									"chico"   : "22px",
									"regular" : "24px",
									"grande"  : "26px",
								}}
								typeText="subtitle"
								align="left"
								letterSpacing="1.5px"
								sheetNo={sheetNo}
								textShell={() => <TextShell.TitleSmall width="100%" align="left" />}
								data={textInsertion(data?.text[2], defaultTitle05, isInWorkSpace)}
								isInPaginator={isInPaginator}
								isThumbNail={isThumbNail}
								textNo={2}
							/>
							<DividerLayout long={isInWorkSpace ? "0.2em" : "0.3em"} position="h" />
						</Stack>
						<div
							{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text10` })}
						>
							<Text
								sizes={{
									"chico"   : "12px",
									"regular" : "14px",
									"grande"  : "16px",
								}}
								typeText="index"
								align="left"
								gapSpacing="10px"
								letterSpacing={"1px"}
								sheetNo={sheetNo}
								textShell={() => <TextShell.BodyIndices align="left" />}
								data={textInsertion(data?.text[3], defaultIndice05, isInWorkSpace)}
								isInPaginator={isInPaginator}
								isThumbNail={isThumbNail}
								textNo={3}
							/>
						</div>
					</Stack>
					<Stack
						spacing={isInWorkSpace ? "15px" : "0.15em"}
						aria-hidden
					>
						<Stack
							spacing={isInWorkSpace ? "12px" : "0.15em"}
							{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text11` })}
						>
							<Text
								sizes={{
									"chico"   : "22px",
									"regular" : "24px",
									"grande"  : "26px",
								}}
								typeText="subtitle"
								align="left"
								letterSpacing="1.5px"
								sheetNo={sheetNo}
								textShell={() => <TextShell.TitleSmall width="100%" align="left" />}
								data={textInsertion(data?.text[4], defaultTitle06, isInWorkSpace)}
								isInPaginator={isInPaginator}
								isThumbNail={isThumbNail}
								textNo={4}
							/>
							<DividerLayout long={isInWorkSpace ? "0.2em" : "0.3em"} position="h" />
						</Stack>
						<div
							{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text12` })}
						>
							<Text
								sizes={{
									"chico"   : "12px",
									"regular" : "14px",
									"grande"  : "16px",
								}}
								typeText="index"
								align="left"
								gapSpacing="10px"
								sheetNo={sheetNo}
								letterSpacing={"1px"}
								textShell={() => <TextShell.BodyIndices align="left" />}
								data={textInsertion(data?.text[5], defaultIndice06, isInWorkSpace)}
								isInPaginator={isInPaginator}
								isThumbNail={isThumbNail}
								textNo={5}
							/>
						</div>
					</Stack>
				</Stack>
			</Group>
		</Flex>
	);
};

export default Mod60;
