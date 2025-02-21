import {Stack} from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod46 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultText01 = "<p style='text-align: right;'><span style='font-size: 12px; font-family: Inter-Lifght;'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</span></p>";

	return (
		<Stack
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
			p="4%"
		>
			<Stack
				mah="70%"
				w="50%"
				aria-hidden={true}
				style={{
					textTransform : "uppercase",
				}}
			>
				<Text
					sizes={{
						"chico"   : "11px",
						"regular" : "12px",
						"grande"  : "15px",
					}}
					lineHeight="15px"
					align="right"
					sheetNo={sheetNo}
					textShell={() => <TextShell.Body align="flex-end" />}
					data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
					textNo={0}
				/>
			</Stack>
		</Stack>
	);
};

export default Mod46;
