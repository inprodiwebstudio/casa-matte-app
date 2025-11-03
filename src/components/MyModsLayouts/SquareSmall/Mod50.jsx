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

	const defaultTitle01 = "<p style='text-align: left;'><span style='font-size: 18px; font-family: JosefinSans-Light;'>TÍTULO</span></p>";

	const defaultTitle02 = "<p style='text-align: left;'><span style='font-size: 18px; font-family: JosefinSans-Light;'>TÍTULO</span></p>";

	const defaultTitle03 = "<p style='text-align: left;'><span style='font-size: 18px; font-family: JosefinSans-Light;'>TÍTULO</span></p>";

	const defaultIndice01 = "<p style='text-align: left;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 1</span></p><p style='text-align: left;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 2</span></p><p style='text-align: left;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 3</span></p>";

	const defaultIndice02 = "<p style='text-align: left;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 1</span></p><p style='text-align: left;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 2</span></p><p style='text-align: left;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 3</span></p>";

	const defaultIndice03 = "<p style='text-align: left;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 1</span></p><p style='text-align: left;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 2</span></p><p style='text-align: left;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 3</span></p>";

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
				spacing={isInWorkSpace ? "25px" : "0.2em"}
				w="90%"
				pl="35%"
				pr="5%"
				sx={{
					textTransform : "uppercase",
				}}
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<Stack
					spacing={isInWorkSpace ? "12px" : "0.1em"}
					aria-hidden
				>
					<div>
						<TextFix
							sizes={{
								"chico"   : "22px",
								"regular" : "24px",
								"grande"  : "26px",
							}}
							typeText="subtitle"
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
								"chico"   : "15px",
								"regular" : "18px",
								"grande"  : "20px",
							}}
							typeText="index"
							align="left"
							gapSpacing="8px"
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
					spacing={isInWorkSpace ? "12px" : "0.1em"}
					aria-hidden
				>
					<div>
						<TextFix
							sizes={{
								"chico"   : "22px",
								"regular" : "24px",
								"grande"  : "26px",
							}}
							typeText="subtitle"
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
								"chico"   : "15px",
								"regular" : "18px",
								"grande"  : "20px",
							}}
							typeText="index"
							align="left"
							gapSpacing="8px"
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
					spacing={isInWorkSpace ? "12px" : "0.1em"}
				>
					<div>
						<TextFix
							sizes={{
								"chico"   : "22px",
								"regular" : "24px",
								"grande"  : "26px",
							}}
							typeText="subtitle"
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
								"chico"   : "15px",
								"regular" : "18px",
								"grande"  : "20px",
							}}
							typeText="index"
							align="left"
							gapSpacing="8px"
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
