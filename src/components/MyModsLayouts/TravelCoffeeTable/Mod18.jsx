import { Center, Stack } from "@mantine/core";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";

const Mod18 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: right;'><span style='font-size: 30px; font-family: JosefinSans-Light;'>TÍTULO 1</span></p>";

	return (
		<Center
			w="100%"
			h="100%"
			pb={"4%"}
			pr={"8%"}
			{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
		>
			<Stack
				align="flex-end"
				justify="flex-end"
				w={"100%"}
				h={"100%"}
			>
				<Stack
					w="70%"
					mah={"6%"}
					sx={{
						overflow : "hidden",
					}}
				>
					<TextFix
						sizes={{
							"chico"   : "28px",
							"regular" : "30px",
							"grande"  : "32px",
						}}
						sheetNo={sheetNo}
						textShell={() => <TextShell.Title align="flex-end" />}
						letterSpacing="2.5px"
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
				</Stack>
			</Stack>
		</Center>
	);
};

export default Mod18;
