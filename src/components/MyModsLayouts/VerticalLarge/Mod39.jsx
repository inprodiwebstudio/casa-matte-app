import {Center, Stack} from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod42 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	// const handleWidthTextContainer = () => {
	// 	if (isThumbNail) {
	// 		return "5px";
	// 	}
	// 	if (isInPaginator) {
	// 		return "149px";
	// 	}
	// 	if (isInWorkSpace) {
	// 		return "250px";
	// 	}
	// };

	const defaultText01 = "<p style='text-align: left;'><span style='font-size: 12px; font-family: JosefinSans-Light;'>PARA PAPÁ. UN HOMENAJE A TU VIDA. GRACIAS POR TANTOS AÑOS DE CARIÑO Y AMOR, TE QUEREMOS SIEMPRE..</span></p>";

	return (
		<Center
			w="100%"
			h="100%"
		>
			<Stack
				mah="70%"
				w="70%"
				aria-hidden={true}
			>
				<Text
					sizes={{
						"chico"   : "11px",
						"regular" : "12px",
						"grande"  : "13px",
					}}
					align="left"
					sheetNo={sheetNo}
					textShell={() => <TextShell.Body align="flex-start" />}
					data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
				/>
			</Stack>
		</Center>
	);
};

export default Mod42;
