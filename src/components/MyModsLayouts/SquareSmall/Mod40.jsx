import {Stack, Flex, Center } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";

const Mod40 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 26px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaulSubtTitle = "<p style='text-align: center;'><span style='font-size: 15px; font-family: Inter-Light;'>SUBTÍTULO 1</span></p>";

	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
		>
			<Center w="100%" h="100%">
				<Stack spacing="0.01em" w="100%">
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
								"chico"   : "22px",
								"regular" : "26px",
								"grande"  : "28px",
							}}
							sheetNo={sheetNo}
							letterSpacing="4px"
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
								"chico"   : "13px",
								"regular" : "15px",
								"grande"  : "18px",
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
