import {Stack, Flex }    from "@mantine/core";
import ImgLayout         from "components/LayoutHandler/ImgLayout";
import TextFix           from "components/LayoutHandler/TextFix";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";
//Own components


const Mod37 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultTitle = "<p style='text-align: right;'><span style='font-size: 32px; font-family: JosefinSans-Light;'>VALPARAÍSO</span></p>";

	const defaultSubtitle = "<p style='text-align: right;'><span style='font-size: 15px; font-family: Inter-Lifght;'>CHILE</span></p>";

	return (
		<Flex
			pb="15%"
			w="100%"
			h="100%"
			gap="0.5em"
			direction="column"
		>
			<Stack
				spacing="0.2em"
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
					maw="70%"
					miw="30%"
					mr="5%"
					spacing="0em"
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
				>
					<TextFix
						sizes={{
							"chico"   : "30px",
							"regular" : "32px",
							"grande"  : "34px",
						}}
						align="right"
						sheetNo={sheetNo}
						textShell={() => <TextShell.Title />}
						letterSpacing="3px"
						data={textInsertion(data?.text[0], defaultTitle, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
					<Stack>
						<TextFix
							sizes={{
								"chico"   : "13px",
								"regular" : "15px",
								"grande"  : "17px",
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

export default Mod37;
