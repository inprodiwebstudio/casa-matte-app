import {Stack, Flex }    from "@mantine/core";
import ImgLayout         from "components/LayoutHandler/ImgLayout";
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";
//Own components


const Mod53 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultTitle = "<p style='text-align: right;'><span style='font-size: 42px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaultSubtitle = "<p style='text-align: right;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>Subtítulo</span></p>";

	return (
		<Flex
			pb="8%"
			w="100%"
			h="100%"
			gap="0.5em"
			direction="column"
		>
			<Stack
				spacing={isInWorkSpace ? "5%" : "0.3em"}
				w="100%"
				h="100%"
				align="flex-end"
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
					w="80%"
					mr="8%"
					spacing={isInWorkSpace ? "2px" : "0.1em"}
				>
					<div
						{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
					>
						<Text
							sizes={{
								"chico"   : "38px",
								"regular" : "42px",
								"grande"  : "46px",
							}}
							align="right"
							sheetNo={sheetNo}
							textShell={() => <TextShell.Title align="flex-end" />}
							letterSpacing="4.5px"
							data={textInsertion(data?.text[0], defaultTitle, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={0}
						/>
					</div>
					<Stack
						{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text2` })}
						pr={isInWorkSpace ? "7px" : "0px"}
					>
						<Text
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

export default Mod53;
