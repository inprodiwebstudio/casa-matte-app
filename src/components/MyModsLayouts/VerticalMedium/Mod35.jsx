import { Center, Stack } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";

const Mod35 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 28px; font-family: JosefinSans-Light;'>TÍTULO 1</span></p>";

	return (
		<Center w="100%" h="100%">
			<Stack
				w="70%"
				p="0%"
				pt="0%"
				pb="0%"
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<Text
					sizes={{
						"chico"   : "38px",
						"regular" : "42px",
						"grande"  : "46px",
					}}
					sheetNo={sheetNo}
					typeText="title"
					textShell={() => <TextShell.Title />}
					letterSpacing="4.8px"
					data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
					textNo={0}
				/>
			</Stack>
		</Center>
	);
};

export default Mod35;
