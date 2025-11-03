import {Stack, Flex } from "@mantine/core";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";

const Mod39 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: right;'><span style='font-size: 28px; font-family: Aitana-Regular;'>TÍTULO 2</span></p>";

	return (
		<Flex
			w="100%"
			h="100%"
			pr="9%"
			pb="7%"
			justify="flex-end"
			align="flex-end"
		>
			<Stack
				w="90%"
				mah="120px"
				sx={{
					overflow : "hidden",
				}}
			>
				<Stack
					w={"100%"}
					h="fit-content"
					align={isThumbNail ? "flex-end" : undefined}
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
				>
					<TextFix
						sizes={{
							"chico"   : "38px",
							"regular" : "42px",
							"grande"  : "46px",
						}}
						typeText="title"
						sheetNo={sheetNo}
						letterSpacing="3px"
						textShell={() => <TextShell.Title width="80%" align="flex-end" />}
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod39;
