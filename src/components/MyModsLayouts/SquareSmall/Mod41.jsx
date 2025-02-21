import {Stack, Flex } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod41 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultText01 = "<p style='text-align: right;'><span style='font-size: 26px; font-family: JosefinSans-Light;'>TÍTULO</span></p>";

	const defaulSubtTitle = "<p style='text-align: right;'><span style='font-size: 15px; font-family: Inter-Light;'>SUBTÍTULO 2</span></p>";

	return (
		<Flex
			pb="10%"
			pr="10%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
			direction="column"
			gap="20px"
		>
			<DividerLayout long="7%" position="h" />
			<Stack spacing="2px" w="100%">
				<Text
					sizes={{
						"chico"   : "22px",
						"regular" : "26px",
						"grande"  : "28px",
					}}
					align="right"
					sheetNo={sheetNo}
					letterSpacing="4px"
					textShell={() => <TextShell.Title width="40%" align="flex-end" />}
					isInPaginator={isInPaginator}
					data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
					isThumbNail={isThumbNail}
					textNo={0}
				/>
				<div>
					<Text
						sizes={{
							"chico"   : "13px",
							"regular" : "15px",
							"grande"  : "18px",
						}}
						align="right"
						sheetNo={sheetNo}
						letterSpacing="2px"
						textShell={() => <TextShell.SubTitle width="20%" align="flex-end" />}
						data={textInsertion(data?.text[1], defaulSubtTitle, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={1}
					/>
				</div>
			</Stack>
		</Flex>
	);
};

export default Mod41;
