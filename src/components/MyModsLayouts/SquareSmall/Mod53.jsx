import {Stack, Flex } from "@mantine/core";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod53 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultIndices = "<p style='text-align: center;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 1</span></p><p style='text-align: center;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 2</span></p><p style='text-align: center;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 3</span></p><p style='text-align: center;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 4</span></p><p style='text-align: center;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 5</span></p><p style='text-align: center;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 6</span></p><p style='text-align: center;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 7</span></p><p style='text-align: center;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 8</span></p><p style='text-align: center;'><span style='font-size: 10px; font-family: Inter-Lifght;'>ÍNDICE 9</span></p>";

	return (
		<Flex
			p="10%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				sx={{overflow : "hidden", textTransform : "uppercase"}}
				w="50%"
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<TextFix
					sizes={{
						"chico"   : "15px",
						"regular" : "18px",
						"grande"  : "20px",
					}}
					typeText="index"
					align="center"
					gapSpacing="17px"
					sheetNo={sheetNo}
					letterSpacing="1px"
					textShell={() => <TextShell.BodyIndices align="center" />}
					data={textInsertion(data?.text[1], defaultIndices, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
					textNo={0}
				/>
			</Stack>
		</Flex>
	);
};

export default Mod53;
