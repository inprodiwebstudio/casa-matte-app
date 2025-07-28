import {Stack, Flex }    from "@mantine/core";
import ImgLayout         from "components/LayoutHandler/ImgLayout";
import Text              from "components/LayoutHandler/Text";
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

	const defaultTitle = "<p style='text-align: right;'><span style='font-size: 30px; font-family: JosefinSans-Light;'>TÍTULO</span></p>";

	const defaultSubtitle = "<p style='text-align: right;'><span style='font-size: 12px; font-family: Inter-Lifght;'>SUBTÍTULO</span></p>";

	return (
		<Flex
			pb="22%"
			w="100%"
			h="100%"
			gap="0.5em"
			direction="column"
		>
			<Stack
				spacing={isInWorkSpace ? "4%" : "8%"}
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
					w="90%"
					mr="8%"
					spacing={isInWorkSpace ? "0px" : "0.1em"}
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
							typeText="title"
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
					<Stack {...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text2` })}>
						<Text
							sizes={{
								"chico"   : "14px",
								"regular" : "15px",
								"grande"  : "16px",
							}}
							typeText="subtitle"
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
