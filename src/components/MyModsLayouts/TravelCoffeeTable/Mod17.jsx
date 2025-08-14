import { Center, Stack } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";

const Mod17 = ({
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
		<Center
			w="100%"
			h="100%"
			{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
		>
			<Stack
				w="70%"
				p="0%"
				pt="0%"
				pb="0%"
			>
				<Text
					sizes={{
						"chico"   : "28px",
						"regular" : "30px",
						"grande"  : "32px",
					}}
					align="center"
					sheetNo={sheetNo}
					textShell={() => <TextShell.Title />}
					letterSpacing="2.5px"
					data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
					textNo={0}
				/>
			</Stack>
		</Center>
	);
};

export default Mod17;
