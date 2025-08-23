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
		<div
			style={{
				width        : "100%",
				height       : "100%",
			}}
			{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
		>
			<Center w="100%" h="100%">
				<Stack
					w="70%"
					p="0%"
					pt="0%"
					pb="0%"
				>
					<Text
						sizes={{
							"chico"   : "38px",
							"regular" : "42px",
							"grande"  : "46px",
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
		</div>
	);
};

export default Mod35;
