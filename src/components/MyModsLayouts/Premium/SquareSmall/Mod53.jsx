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

	const defaultIndices = "<p style='text-align: center;'><span style='font-size: 13px; font-family: Inter-Lifght;'>FLORENCIA</span></p><p style='text-align: center;'><span style='font-size: 13px; font-family: Inter-Lifght;'>ORVIETTO</span></p><p style='text-align: center;'><span style='font-size: 13px; font-family: Inter-Lifght;'>MONTALCINO</span></p><p style='text-align: center;'><span style='font-size: 13px; font-family: Inter-Lifght;'>PIENZA</span></p><p style='text-align: center;'><span style='font-size: 13px; font-family: Inter-Lifght;'>Smithfeld</span></p><p style='text-align: center;'><span style='font-size: 13px; font-family: Inter-Lifght;'>SIENNA</span></p><p style='text-align: center;'><span style='font-size: 13px; font-family: Inter-Lifght;'>BAGNO VIGNIONI</span></p><p style='text-align: center;'><span style='font-size: 13px; font-family: Inter-Lifght;'>SAN GIMINIANO</span></p><p style='text-align: center;'><span style='font-size: 13px; font-family: Inter-Lifght;'>MONTEPULCIANO</span></p>";

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
				w="80%"
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<TextFix
					sizes={{
						"chico"   : "15px",
						"regular" : "18px",
						"grande"  : "20px",
					}}
					align="center"
					gapSpacing="20px"
					sheetNo={sheetNo}
					letterSpacing="3px"
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
