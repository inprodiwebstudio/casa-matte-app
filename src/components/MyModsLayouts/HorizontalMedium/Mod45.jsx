import {Center, Stack} from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod45 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 12px; font-family: Inter-Light;'>Odi pullerit. Actus nes consid fur, senatus, essendi enatrum pra, us consum, que quam, ve, quo potimorta trurs con hosus ore dumus ommorunum dium oporat, elum hocul verobu</span></p>";

	return (
		<Center
			w="100%"
			h="100%"
		>
			<Stack
				mah="70%"
				w="50%"
				aria-hidden={true}
			>
				<Text
					sizes={{
						"chico"   : "10px",
						"regular" : "12px",
						"grande"  : "14px",
					}}
					lineHeight="15px"
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

export default Mod45;
