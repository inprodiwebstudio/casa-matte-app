import {Stack, Flex } from "@mantine/core";
import ImgLayout      from "components/LayoutHandler/ImgLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod52 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultTitle = "<p style='text-align: right;'><span style='font-size: 42px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaultSubtitle = "<p style='text-align: left;'><span style='font-size: 14px; font-family: Inter-Lifght;'>SUBTÍTULO</span></p>";

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
				spacing="3%"
				w="60%"
				h="70%"
			>
				<Stack
					w="100%"
					h="100%"
					spacing="5%"
				>
					<Stack mr="10%" {...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}>
						<Text
							sizes={{
								"chico"   : "38px",
								"regular" : "42px",
								"grande"  : "46px",
							}}
							align="right"
							sheetNo={sheetNo}
							textShell={() => <TextShell.Title />}
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
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text2` })}
				>
					<Text
						sizes={{
							"chico"   : "14px",
							"regular" : "15px",
							"grande"  : "16px",
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

export default Mod52;
