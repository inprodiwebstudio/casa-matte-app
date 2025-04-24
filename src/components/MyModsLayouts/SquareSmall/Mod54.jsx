import { Center, Stack } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";

const Mod54 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 42px; font-family: TAN-MERINGUE;'>TOSCANA</span></p>";

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
						"chico"   : "40px",
						"regular" : "42px",
						"grande"  : "45px",
					}}
					sheetNo={sheetNo}
					textShell={() => <TextShell.Title />}
					letterSpacing="6.5px"
					data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
					textNo={0}
				/>
			</Stack>
		</Center>
	);
};

export default Mod54;
