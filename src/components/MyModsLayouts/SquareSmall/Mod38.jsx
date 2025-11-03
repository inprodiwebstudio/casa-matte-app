import { Center, Stack } from "@mantine/core";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";

const Mod38 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 30px; font-family: JosefinSans-Light;'>TÍTULO 1</span></p>";

	return (
		<Center w="100%" h="100%">
			<Stack
				w="70%"
				p="0%"
				pt="0%"
				pb="0%"
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<TextFix
					sizes={{
						"chico"   : "22px",
						"regular" : "26px",
						"grande"  : "28px",
					}}
					typeText="title"
					sheetNo={sheetNo}
					textShell={() => <TextShell.Title />}
					letterSpacing="4px"
					data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
					textNo={0}
				/>
			</Stack>
		</Center>
	);
};

export default Mod38;
