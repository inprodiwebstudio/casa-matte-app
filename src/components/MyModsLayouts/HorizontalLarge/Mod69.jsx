import {Stack} from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod69 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: right;'><span style='font-size: 14px; font-family: Inter-Lifght;'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</span></p>";

	return (
		<Stack
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
			pr={isInWorkSpace ? "50px" : "8%"}
			pb={isInWorkSpace ? "45px" : "8%"}
		>
			<Stack
				mah="70%"
				w="50%"
				aria-hidden={true}
				style={{
					textTransform : "uppercase",
				}}
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<Text
					sizes={{
						"chico"   : "11px",
						"regular" : "12px",
						"grande"  : "15px",
					}}
					lineHeight="20px"
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

export default Mod69;
