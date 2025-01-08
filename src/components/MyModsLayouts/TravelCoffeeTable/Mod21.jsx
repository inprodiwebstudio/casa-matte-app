import { Center, Stack } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";

const Mod20 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 12px; font-family: JosefinSans-Light;'>Quisque at malesuada dolor. Nullam in eleifend est. In dolor dui, egestas id blandit eget...</span></p>";

	return (
		<Center
			w="100%"
			h="100%"
			p={"4%"}
			sx={{
				overflow : "hidden",
			}}
		>
			<Stack
				sx={{
					textTransform : "uppercase",
				}}
				w={"60%"}
			>
				<Text
					sizes={{
						"chico"   : "10px",
						"regular" : "12px",
						"grande"  : "14px",
					}}
					sheetNo={sheetNo}
					lineHeight={"18px"}
					textShell={() => <TextShell.BodyParagraph align="center" width="60%" />}
					data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
					textNo={0}
				/>
			</Stack>
		</Center>
	);
};

export default Mod20;
