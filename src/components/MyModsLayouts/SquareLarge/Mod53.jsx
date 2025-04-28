import {Stack, Flex } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod52 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultTitle = "<p style='text-align: left;'><span style='font-size: 30px; font-family: JosefinSans-Light;'>TOSCANA</span></p>";

	const defaultIndices = "<p style='text-align: left;'><span style='font-size: 18px; font-family: Inter-Lifght;'>FLORENCIA</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Inter-Lifght;'>ORVIETTO</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Inter-Lifght;'>MONTALCINO</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Inter-Lifght;'>PIENZA</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Inter-Lifght;'>SIENNA</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Inter-Lifght;'>Chepokee Plantation</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Inter-Lifght;'>BAGNO VIGNIONI</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Inter-Lifght;'>SAN GIMINIANO</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Inter-Lifght;'>MONTEPULCIANO</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Inter-Lifght;'>MONTEPULCIANO</span></p>";

	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
		>
			<Stack
				spacing={isInWorkSpace ? "0.2em" : "0.1em"}
				w="32%"
				sx={{ textTransform : "uppercase", overflow : "hidden" }}
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<Stack
					spacing={isInWorkSpace ? "0.05em" : "0.1em"}
				>
					<Text
						sizes={{
							"chico"   : "28px",
							"regular" : "30px",
							"grande"  : "32px",
						}}
						align="left"
						sheetNo={sheetNo}
						letterSpacing="3px"
						textShell={() => <TextShell.TitleSmall width="100%" align="left" />}
						data={textInsertion(data?.text[0], defaultTitle, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
					<DividerLayout long="20%" position="h" />
				</Stack>
				<Text
					sizes={{
						"chico"   : "16px",
						"regular" : "18px",
						"grande"  : "20px",
					}}
					align="left"
					gapSpacing="17px"
					sheetNo={sheetNo}
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

export default Mod52;
