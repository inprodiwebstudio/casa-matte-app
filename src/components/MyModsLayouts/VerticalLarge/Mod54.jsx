import {Stack, Flex }    from "@mantine/core";
import ImgLayout         from "components/LayoutHandler/ImgLayout";
import TextFix           from "components/LayoutHandler/TextFix";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";
//Own components


const Mod54 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultTitle = "<p style='text-align: right;'><span style='font-size: 42px; font-family: JosefinSans-Light;'>TÍTULO</span></p>";

	const defaultSubtitle = "<p style='text-align: right;'><span style='font-size: 16px; font-family: Inter-Lifght;'>SUBTÍTULO</span></p>";

	return (
		<Flex
			pb="8%"
			w="100%"
			h="100%"
			direction="column"
		>
			<Stack
				spacing={isInWorkSpace ? "55px" : "0.2em"}
				w="100%"
				h="100%"
				align="flex-end"
				sx={{textTransform : "uppercase"}}
			>
				<Stack w="100%" h="100%">
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={0}
						urlImage={data?.photos[0] ?? {}}
					/>
				</Stack>
				<Stack
					w="70%"
					mr="7%"
					spacing={isInWorkSpace ? "2px" : "0.06em"}
				>
					<div
						{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
					>
						<TextFix
							sizes={{
								"chico"   : "38px",
								"regular" : "42px",
								"grande"  : "46px",
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
					</div>
					<Stack
						{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text2` })}
					>
						<TextFix
							sizes={{
								"chico"   : "14px",
								"regular" : "15px",
								"grande"  : "16px",
							}}
							align="right"
							sheetNo={sheetNo}
							letterSpacing="2px"
							textShell={() => <TextShell.SubTitle align="flex-end" />}
							data={textInsertion(data?.text[1], defaultSubtitle, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={1}
						/>
					</Stack>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod54;
