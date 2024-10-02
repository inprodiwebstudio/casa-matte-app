import {Stack, Flex } from "@mantine/core";
import ImgLayout      from "components/LayoutHandler/ImgLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod58 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultTitle = "<p style='text-align: right;'><span style='font-size: 46px; font-family: Aitana-Regular;'>SANTIAGO</span></p>";

	const defaultSubtitle = "<p style='text-align: left;'><span style='font-size: 22px; font-family: Inter-Lifght;'>CHILE</span></p>";

	return (
		<Flex
			w="100%"
			h="100%"
			align="flex-end"
			justify="center"
			gap="0.5em"
			direction="column"
		>
			<Stack
				spacing="0.5em"
				w="59%"
				h="77%"
				sx={{textTransform : "uppercase"}}
			>
				<Stack w="100%" h="100%" spacing="0.4em">
					<Stack mr="10%">
						<Text
							sizes={{
								"chico"   : "42px",
								"regular" : "46px",
								"grande"  : "48px",
							}}
							align="right"
							sheetNo={sheetNo}
							textShell={() => <TextShell.Title />}
							letterSpacing="6.5px"
							data={textInsertion(data?.text[0], defaultTitle, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
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
				<Stack mr="40%">
					<Text
						sizes={{
							"chico"   : "20px",
							"regular" : "22px",
							"grande"  : "24px",
						}}
						align="left"
						sheetNo={sheetNo}
						letterSpacing="2px"
						textShell={() => <TextShell.SubTitle />}
						data={textInsertion(data?.text[1], defaultSubtitle, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
					/>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod58;
