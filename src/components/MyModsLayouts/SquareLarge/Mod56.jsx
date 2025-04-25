import {Stack, Flex }    from "@mantine/core";
import ImgLayout         from "components/LayoutHandler/ImgLayout";
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";
//Own components


const Mod59 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultTitle = "<p style='text-align: right;'><span style='font-size: 46px; font-family: Aitana-Regular;'>ISLA NEGRA</span></p>";

	const defaultSubtitle = "<p style='text-align: right;'><span style='font-size: 22px; font-family: Spectral-Light-Italic;'>Chile</span></p>";

	return (
		<Flex
			pb="5%"
			w="100%"
			h="100%"
			direction="column"
		>
			<Stack
				spacing="0.5em"
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
					w="100%"
					spacing={isInWorkSpace ? "0em" : "0.1em"}
					pr="0.7em"
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
				>
					<Text
						sizes={{
							"chico"   : "42px",
							"regular" : "46px",
							"grande"  : "48px",
						}}
						align="right"
						sheetNo={sheetNo}
						textShell={() => <TextShell.Title width="40%" align="flex-end" />}
						letterSpacing="6.5px"
						data={textInsertion(data?.text[0], defaultTitle, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
					<Stack w="100%">
						<Text
							sizes={{
								"chico"   : "20px",
								"regular" : "22px",
								"grande"  : "24px",
							}}
							align="left"
							sheetNo={sheetNo}
							letterSpacing="2px"
							textShell={() => <TextShell.SubTitle width="20%" align="flex-end" />}
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

export default Mod59;
