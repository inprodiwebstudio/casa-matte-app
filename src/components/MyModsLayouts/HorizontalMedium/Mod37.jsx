import {Stack, Flex, Center } from "@mantine/core";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";

const Mod37 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 30px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaulSubtTitle = "<p style='text-align: center;'><span style='font-size: 12px; font-family: Inter-Lifght;'>SUBTÍTULO 1</span></p>";

	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
		>
			<Center w="100%" h="100%">
				<Stack
					spacing={isInWorkSpace ? "0px" : "0.15em"}
					w="100%"
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
				>
					<div
						style={{
							width        : "100%",
							paddingLeft  : "10%",
							paddingRight : "10%",
							maxHeight    : "100px",
					 }}
					>
						<TextFix
							sizes={{
								"chico"   : "28px",
								"regular" : "30px",
								"grande"  : "32px",
							}}
							sheetNo={sheetNo}
							letterSpacing="6px"
							textShell={() => <TextShell.Title />}
							data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={0}
						/>
					</div>
					<div
						style={{
							width        : "100%",
							paddingLeft  : "20%",
							paddingRight : "20%",
						}}>
						<TextFix
							sizes={{
								"chico"   : "10px",
								"regular" : "12px",
								"grande"  : "14px",
							}}
							sheetNo={sheetNo}
							letterSpacing="2px"
							textShell={() => <TextShell.SubTitle />}
							data={textInsertion(data?.text[1], defaulSubtTitle, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={1}
						/>
					</div>
				</Stack>
			</Center>
		</Flex>
	);
};

export default Mod37;
