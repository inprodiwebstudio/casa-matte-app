import {Stack, Flex }    from "@mantine/core";
import ImgLayout         from "components/LayoutHandler/ImgLayout";
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";
//Own components


const Mod55 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	keyIndex,
	modLayout,
}) => {

	const defaultTitle = "<p style='text-align: right;'><span style='font-size: 38px; font-family: Aitana-Regular;'>ISLA NEGRA</span></p>";

	const defaultSubtitle = "<p style='text-align: right;'><span style='font-size: 15px; font-family: Spectral-Light-Italic;'>Chile</span></p>";

	return (
		<Flex
			pb="8%"
			w="100%"
			h="100%"
			gap="0.5em"
			direction="column"
		>
			<Stack
				spacing="0.3em"
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
					w="70%"
					mr="10%"
					spacing="0px"
				>
					<div
						id={`${pageNo}-${keyIndex}-${modLayout}-text1`}
					>
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
					</div>
					<Stack id={`${pageNo}-${keyIndex}-${modLayout}-text2`}>
						<Text
							sizes={{
								"chico"   : "14px",
								"regular" : "15px",
								"grande"  : "16px",
							}}
							align="right"
							sheetNo={sheetNo}
							letterSpacing="2px"
							textShell={() => <TextShell.SubTitle />}
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

export default Mod55;
