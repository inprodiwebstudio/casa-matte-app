import {Stack, Flex } from "@mantine/core";
import ImgLayout      from "components/LayoutHandler/ImgLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod50 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultTitle = "<p style='text-align: center;'><span style='font-size: 42px; font-family: Aitana-Regular;'>SANTIAGO</span></p>";

	const defaultSubtitle = "<p style='text-align: center;'><span style='font-size: 14px; font-family: Inter-Lifght;'>CHILE</span></p>";

	return (
		<Flex
			pt="10%"
			pb="10%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
			gap={isInWorkSpace ? "8%" : "0.35em"}
			direction="column"
		>
			<Stack
				spacing="0em"
				w="80%"
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<Text
					sizes={{
						"chico"   : "38px",
						"regular" : "42px",
						"grande"  : "46px",
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
			</Stack>
			<Stack w="53%" h="100%">
				<ImgLayout
					isInWorkSpace={isInWorkSpace}
					sheetNo={sheetNo}
					imageNo={0}
					urlImage={data?.photos[0] ?? {}}
				/>
			</Stack>
			<Stack
				spacing="0em"
				w="53%"
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text2` })}
			>
				<Text
					sizes={{
						"chico"   : "14px",
						"regular" : "15px",
						"grande"  : "16px",
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
			</Stack>
		</Flex>
	);
};

export default Mod50;
