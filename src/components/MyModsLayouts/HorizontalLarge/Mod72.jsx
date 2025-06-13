import { Box, Flex, Stack } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod72 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {
	const defaultText01 = "<p style='text-align: left;'><span style='font-size: 18px; font-family: JosefinSans-Light;'>Subtítulo 3</span></p>";

	const defaultText02 = "<p style='text-align: justify;'><span style='font-size: 15px; font-family: JosefinSans-Light;'>Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur feugiat natoque vel nisi est, lacinia in sociis sodales luctus integer. Lectus conubia libero proin tempus molestie feugiat posuere ullamcorper placerat fringilla, litora consequat torquent habitasse commodo inceptos lobortis velit vulputate, magna natoque integer euismod suscipit gravida scelerisque cras aliquet. Tincidunt velit viverra dignissim ridiculus taciti rhoncus nibh senectus semper, pharetra odio conubia dictumst malesuada lectus dis penatibus, primis orci dictum sociosqu nam platea parturient cursus.</span></p>";


	return (
		<Flex
			p="4%"
			w="100%"
			h="100%"
			align="flex-end"
			justify="flex-end"
		>
			<Stack
				w="35%"
				mah="100%"
				spacing="0.1em"
				aria-hidden
				sx={{ overflow : "hidden"}}
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<Flex
					direction="column"
					gap={isInWorkSpace ? "0.12em" : "0.1em"}
					w="100%"
					style={{
						textTransform : "uppercase",
					}}
				>
					<Text
						sizes={{
							"chico"   : "16px",
							"regular" : "18px",
							"grande"  : "20px",
						}}
						align="left"
						letterSpacing="3px"
						sheetNo={sheetNo}
						textShell={() => <TextShell.SubTitle width="50%" align="flex-start" />}
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
					<DividerLayout long="13%" position="h" />
				</Flex>
				<Box w="100%">
					<Text
						sizes={{
							"chico"   : "13px",
							"regular" : "15px",
							"grande"  : "18px",
						}}
						align="justify"
						lineHeight="18px"
						sheetNo={sheetNo}
						textShell={() => <TextShell.BodyParagraph width="100%" align="flex-end" />}
						data={textInsertion(data?.text[1], defaultText02, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={1}
					/>
				</Box>
			</Stack>
		</Flex>
	);
};

export default Mod72;
