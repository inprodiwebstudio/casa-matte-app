import {Stack, Flex }    from "@mantine/core";
import ImgLayout         from "components/LayoutHandler/ImgLayout";
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";
//Own components


const Mod58 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultTitle = "<p style='text-align: right;'><span style='font-size: 28px; font-family: Aitana-Regular;'>SANTIAGO</span></p>";

	const defaultSubtitle = "<p style='text-align: right;'><span style='font-size: 12px; font-family: Inter-Lifght;'>CHILE</span></p>";

	return (
		<Flex
			pb="8%"
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
					spacing={isInWorkSpace ? "2px" : "0.1em"}
					pr="0.5em"
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
				>
					<Text
						sizes={{
							"chico"   : "22px",
							"regular" : "26px",
							"grande"  : "28px",
						}}
						typeText="title"
						align="right"
						sheetNo={sheetNo}
						textShell={() => <TextShell.Title width="40%" align="flex-end" />}
						letterSpacing="2px"
						data={textInsertion(data?.text[0], defaultTitle, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
					<Stack w="100%" pr={isInWorkSpace ? "4px" : "0px"}>
						<Text
							sizes={{
								"chico"   : "13px",
								"regular" : "15px",
								"grande"  : "18px",
							}}
							typeText="subtitle"
							align="left"
							sheetNo={sheetNo}
							letterSpacing="1px"
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

export default Mod58;
