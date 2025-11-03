import {Stack, Flex } from "@mantine/core";
import ImgLayout      from "components/LayoutHandler/ImgLayout";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod57 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultTitle = "<p style='text-align: right;'><span style='font-size: 28px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaultSubtitle = "<p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>SUBTÍTULO</span></p>";

	return (
		<Flex
			w="100%"
			h="100%"
			align="flex-end"
			justify="center"
			gap="0.3em"
			direction="column"
		>
			<Stack
				spacing="0.3em"
				w="59%"
				h="78%"
				sx={{textTransform : "uppercase"}}
			>
				<Stack
					w="100%"
					h="100%"
					spacing={isInWorkSpace ? "0.2em" : "0.3em"}
				>
					<Stack
						mr="10%"
						h="fit-content"
						{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
					>
						<TextFix
							sizes={{
								"chico"   : "22px",
								"regular" : "26px",
								"grande"  : "28px",
							}}
							typeText="title"
							align="right"
							sheetNo={sheetNo}
							textShell={() => <TextShell.Title />}
							letterSpacing="2px"
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
					h="fit-content"
				>
					<TextFix
						sizes={{
							"chico"   : "13px",
							"regular" : "15px",
							"grande"  : "18px",
						}}
						typeText="subtitle"
						align="left"
						sheetNo={sheetNo}
						letterSpacing="1px"
						textShell={() => <TextShell.SubTitle />}
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

export default Mod57;
