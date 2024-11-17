import {Stack, Flex } from "@mantine/core";
import ImgLayout      from "components/LayoutHandler/ImgLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod55 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultTitle = "<p style='text-align: center;'><span style='font-size: 26px; font-family: Aitana-Regular;'>SANTIAGO</span></p>";

	const defaultSubtitle = "<p style='text-align: center;'><span style='font-size: 15px; font-family: Inter-Lifght;'>CHILE</span></p>";

	return (
		<Flex
			p="8%"
			pl="4%"
			pr="4%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
			gap="0.5em"
			direction="column"
		>
			<Stack
				spacing="0.07em"
				w="70%"
			>
				<div>
					<Text
						sizes={{
							"chico"   : "22px",
							"regular" : "26px",
							"grande"  : "28px",
						}}
						align="center"
						sheetNo={sheetNo}
						textShell={() => <TextShell.Title />}
						letterSpacing="6.5px"
						data={textInsertion(data?.text[0], defaultTitle, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
				</div>
			</Stack>
			<Stack w="100%" h="100%">
				<ImgLayout
					isInWorkSpace={isInWorkSpace}
					sheetNo={sheetNo}
					imageNo={0}
					urlImage={data?.photos[0] ?? {}}
				/>
			</Stack>
			<Stack
				spacing="0.07em"
				w="50%"
			>
				<div>
					<Text
						sizes={{
							"chico"   : "13px",
							"regular" : "15px",
							"grande"  : "18px",
						}}
						align="center"
						sheetNo={sheetNo}
						letterSpacing="2px"
						textShell={() => <TextShell.SubTitle />}
						data={textInsertion(data?.text[1], defaultSubtitle, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={1}
					/>
				</div>
			</Stack>
		</Flex>
	);
};

export default Mod55;
