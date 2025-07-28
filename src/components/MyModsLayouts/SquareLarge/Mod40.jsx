import {Stack, Flex, Center } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";

const Mod40 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 42px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaulSubtTitle = "<p style='text-align: center;'><span style='font-size: 15px; font-family: Inter-Lifght;'>SUBTÍTULO 1</span></p>";

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
					spacing={isInWorkSpace ? "4px" : "0.05em"}
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
						<Text
							sizes={{
								"chico"   : "42px",
								"regular" : "46px",
								"grande"  : "48px",
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
						<Text
							sizes={{
								"chico"   : "18px",
								"regular" : "20px",
								"grande"  : "22px",
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

export default Mod40;
