import {Stack, Flex } from "@mantine/core";
import ImgLayout      from "components/LayoutHandler/ImgLayout";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod36 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultTitle = "<p style='text-align: right;'><span style='font-size: 32px; font-family: Aitana-Regular;'>SANTIAGO</span></p>";

	const defaultSubtitle = "<p style='text-align: left;'><span style='font-size: 15px; font-family: Inter-Lifght;'>CHILE</span></p>";

	return (
		<Flex
			pt="15%"
			w="100%"
			h="100%"
			align="flex-end"
			gap="0.5em"
			direction="column"
		>
			<Stack
				spacing="0.2em"
				w="70%"
				h="80%"
			>
				<Stack w="100%" h="100%" spacing="0.4em">
					<Stack
						mr="10%"
						sx={{textTransform : "uppercase"}}
					>
						<TextFix
							sizes={{
								"chico"   : "30px",
								"regular" : "32px",
								"grande"  : "34px",
							}}
							align="right"
							sheetNo={sheetNo}
							textShell={() => <TextShell.Title align="flex-end" />}
							letterSpacing="6.5px"
							data={textInsertion(data?.text[0], defaultTitle, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={0}
						/>
					</Stack>
					<Stack w="100%" h="100%">
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={0}
							urlImage={data?.photos[0] ?? {}}
						/>
					</Stack>
				</Stack>
				<Stack
					mr="40%"
					sx={{textTransform : "uppercase"}}
				>
					<TextFix
						sizes={{
							"chico"   : "13px",
							"regular" : "15px",
							"grande"  : "17px",
						}}
						align="left"
						sheetNo={sheetNo}
						letterSpacing="2px"
						textShell={() => <TextShell.SubTitle align="flex-start" />}
						data={textInsertion(data?.text[1], defaultSubtitle, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={1}
					/>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod36;
