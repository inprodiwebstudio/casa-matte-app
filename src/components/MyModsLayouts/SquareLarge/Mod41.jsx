import {Stack, Flex } from "@mantine/core";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod41 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: right;'><span style='font-size: 42px; font-family: JosefinSans-Light;'>TÍTULO</span></p>";

	const defaulSubtTitle = "<p style='text-align: right;'><span style='font-size: 15px; font-family: Inter-Lifght;'>SUBTÍTULO 2</span></p>";

	return (
		<Flex
			pb="8%"
			pr="8%"
			pl="10%"
			w="100%"
			h="100%"
			align="flex-end"
		>
			<Stack
				spacing={isInWorkSpace ? "20px" : "0.1em"}
				w="100%"
				align="flex-end"
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<Flex
					w="100%"
					justify="flex-end"
					pr={isInWorkSpace ? "7px" : "0px"}
				>
					<DividerLayout
						long="7%"
						weight={isInWorkSpace ? "2px" : "0.015em"}
						position="h"
					/>
				</Flex>
				<Stack spacing={isInWorkSpace ? "3px" : "0.1em"} w="100%">
					<TextFix
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
					<div
						style={{
							paddingRight : isInWorkSpace ? "5px" : "0px",
						}}
					>
						<TextFix
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
			</Stack>
		</Flex>
	);
};

export default Mod41;
