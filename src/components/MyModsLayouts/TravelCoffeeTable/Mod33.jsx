import { Center, Stack } from "@mantine/core";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";

const Mod33 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 40px; font-family: JosefinSans-Light;'>TÍTULO 1</span></p>";

	return (
		<Center w="100%" h="100%">
			<Stack
				w="70%"
				p="0%"
				pt="0%"
				pb="0%"
				sx={{
					textTransform : "uppercase",
				}}
			>
				<TextFix
					sizes={{
						"chico"   : "38px",
						"regular" : "40px",
						"grande"  : "42px",
					}}
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

export default Mod33;
