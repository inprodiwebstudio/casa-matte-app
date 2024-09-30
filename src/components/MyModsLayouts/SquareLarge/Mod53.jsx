import {Stack, Flex } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod53 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultIndices = "<p style='text-align: center;'><span style='font-size: 20px; font-family: Inter-Lifght;'>FLORENCIA</span></p><p style='text-align: center;'><span style='font-size: 20px; font-family: Inter-Lifght;'>ORVIETTO</span></p><p style='text-align: center;'><span style='font-size: 20px; font-family: Inter-Lifght;'>MONTALCINO</span></p><p style='text-align: center;'><span style='font-size: 20px; font-family: Inter-Lifght;'>PIENZA</span></p><p style='text-align: center;'><span style='font-size: 20px; font-family: Inter-Lifght;'>Smithfeld</span></p><p style='text-align: center;'><span style='font-size: 20px; font-family: Inter-Lifght;'>SIENNA</span></p><p style='text-align: center;'><span style='font-size: 20px; font-family: Inter-Lifght;'>BAGNO VIGNIONI</span></p><p style='text-align: center;'><span style='font-size: 20px; font-family: Inter-Lifght;'>SAN GIMINIANO</span></p><p style='text-align: center;'><span style='font-size: 20px; font-family: Inter-Lifght;'>MONTEPULCIANO</span></p><p style='text-align: center;'><span style='font-size: 20px; font-family: Inter-Lifght;'>ANTINORI</span></p>";

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
				maw="60%"
				miw="30%"
				mah="70%"
			>
				<Text
					sizes={{
						"chico"   : "18px",
						"regular" : "20px",
						"grande"  : "22px",
					}}
					align="center"
					gapSpacing="25px"
					sheetNo={sheetNo}
					letterSpacing="3px"
					textShell={() => <TextShell.BodyIndices align="center" />}
					data={textInsertion(data?.text[1], defaultIndices, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
				/>
			</Stack>
		</Flex>
	);
};

export default Mod53;
