import {Stack, Flex } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod41 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultText01 = "<p style='text-align: right;'><span style='font-size: 46px; font-family: JosefinSans-Light;'>TÍTULO</span></p>";

	const defaulSubtTitle = "<p style='text-align: right;'><span style='font-size: 20px; font-family: Inter-Light;'>SUBTÍTULO 2</span></p>";

	return (
		<Flex
			pb="10%"
			pr="10%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
			gap="0.1em"
			direction="column"
		>
			<DividerLayout long="7%" position="h" />
			<Stack spacing="0.05em" w="100%">
				<Text
					sizes={{
						"chico"   : "42px",
						"regular" : "46px",
						"grande"  : "48px",
					}}
					align="right"
					sheetNo={sheetNo}
					letterSpacing="6px"
					textShell={() => <TextShell.Title width="40%" align="flex-end" />}
					isInPaginator={isInPaginator}
					data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
					isThumbNail={isThumbNail}
					textNo={0}
				/>
				<div>
					<Text
						sizes={{
							"chico"   : "18px",
							"regular" : "20px",
							"grande"  : "22px",
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
