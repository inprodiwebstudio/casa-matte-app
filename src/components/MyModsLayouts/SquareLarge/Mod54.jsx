import {Stack, Flex } from "@mantine/core";
import ImgLayout      from "components/LayoutHandler/ImgLayout";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod56 = ({
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
			p="8%"
			pl="4%"
			pr="4%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
			gap={isInWorkSpace ? "30px" : "0.2em"}
			direction="column"
		>
			<Stack
				spacing="0.07em"
				w="70%"
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<div>
					<TextFix
						sizes={{
							"chico"   : "42px",
							"regular" : "46px",
							"grande"  : "48px",
						}}
						align="center"
						sheetNo={sheetNo}
						textShell={() => <TextShell.Title />}
						letterSpacing="4px"
						data={textInsertion(data?.text[0], defaultTitle, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
				</div>
			</Stack>
			<Stack w="50%" h="100%">
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
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text2` })}
			>
				<div>
					<TextFix
						sizes={{
							"chico"   : "20px",
							"regular" : "22px",
							"grande"  : "24px",
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

export default Mod56;
