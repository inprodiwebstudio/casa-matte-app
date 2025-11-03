import {Center, Stack} from "@mantine/core";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod68 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 15px; font-family: Inter-Lifght;'>Odi pullerit. Actus nes consid fur, senatus, essendi enatrum pra, us consum, que quam, ve, quo potimorta trurs con hosus ore dumus ommorunum dium oporat, elum hocul verobu</span></p>";

	return (
		<Center
			w="100%"
			h="100%"
		>
			<Stack
				mah="70%"
				w="50%"
				aria-hidden={true}
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<TextFix
					sizes={{
						"chico"   : "13px",
						"regular" : "15px",
						"grande"  : "17px",
					}}
					lineHeight="20px"
					align="center"
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

export default Mod68;
