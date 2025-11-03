import {Center, Stack} from "@mantine/core";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod42 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 10px; font-family: Inter-Lifght;'>PARA PAPÁ. UN HOMENAJE A TU VIDA. GRACIAS POR TANTOS AÑOS DE CARIÑO Y AMOR, TE QUEREMOS SIEMPRE..</span></p>";

	return (
		<Center
			w="100%"
			h="100%"
		>
			<Stack
				mah="70%"
				w="65%"
				aria-hidden={true}
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<TextFix
					sizes={{
						"chico"   : "8px",
						"regular" : "10px",
						"grande"  : "13px",
					}}
					lineHeight="15px"
					align="center"
					letterSpacing={"1px"}
					sheetNo={sheetNo}
					textShell={() => <TextShell.Body align="center" />}
					data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
					textNo={0}
				/>
			</Stack>
		</Center>
	);
};

export default Mod42;
