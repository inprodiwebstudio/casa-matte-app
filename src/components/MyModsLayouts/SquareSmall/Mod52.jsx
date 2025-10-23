import {Stack, Flex } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod51 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultTitle = "<p style='text-align: left;'><span style='font-size: 20px; font-family: JosefinSans-Light;'>TÍTULO</span></p>";

	const defaultIndices = "<p style='text-align: left;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 1</span></p><p style='text-align: left;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 2</span></p><p style='text-align: left;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 3</span></p><p style='text-align: left;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 4</span></p><p style='text-align: left;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 5</span></p><p style='text-align: left;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 6</span></p><p style='text-align: left;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 7</span></p><p style='text-align: left;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 8</span></p><p style='text-align: left;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 9</span></p><p style='text-align: left;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 10</span></p>";

	return (
		<Flex
			p="10%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				spacing={isInWorkSpace ? "20px" : "0.1em"}
				sx={{overflow : "hidden", textTransform : "uppercase"}}
				w={isInWorkSpace ? "20%" : "30%"}
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<Stack
					spacing={isInWorkSpace ? "18px" : "0.1em"}
				>
					<Text
						sizes={{
							"chico"   : "22px",
							"regular" : "24px",
							"grande"  : "26px",
						}}
						typeText="subtitle"
						align="left"
						sheetNo={sheetNo}
						letterSpacing="3px"
						textShell={() => <TextShell.TitleSmall width="100%" align="left" />}
						data={textInsertion(data?.text[0], defaultTitle, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
					<DividerLayout long="19%" position="h" />
				</Stack>
				<Text
					sizes={{
						"chico"   : "15px",
						"regular" : "18px",
						"grande"  : "20px",
					}}
					typeText="index"
					align="left"
					gapSpacing="15px"
					sheetNo={sheetNo}
					letterSpacing="1px"
					textShell={() => <TextShell.BodyIndices align="left" />}
					data={textInsertion(data?.text[1], defaultIndices, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
					textNo={1}
				/>
			</Stack>
		</Flex>
	);
};

export default Mod51;
