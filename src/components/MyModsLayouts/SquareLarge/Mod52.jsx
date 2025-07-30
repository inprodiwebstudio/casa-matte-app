import {Stack, Flex } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod52 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultTitle = "<p style='text-align: left;'><span style='font-size: 24px; font-family: Aitana-Regular;'>VIRGINIA</span></p>";

	const defaultIndices = "<p style='text-align: left;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Colonial Williamsburg</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>William & Mary University</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>The Capitol</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Jamestown</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Smithfeld</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Chepokee Plantation</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Waller Mill Park</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Richmond</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Ford’s Colony</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>St. Andrew’s</span></p>";

	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
		>
			<Stack
				spacing="0.2em"
				sx={{overflow : "hidden"}}
				w="23%"
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<Stack
					spacing={isInWorkSpace ? "0.15em" : "0.1em"}
				>
					<Text
						sizes={{
							"chico"   : "28px",
							"regular" : "30px",
							"grande"  : "32px",
						}}
						align="left"
						sheetNo={sheetNo}
						letterSpacing="3px"
						textShell={() => <TextShell.TitleSmall width="100%" align="left" />}
						data={textInsertion(data?.text[0], defaultTitle, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
					<DividerLayout long="20%" position="h" />
				</Stack>
				<Text
					sizes={{
						"chico"   : "16px",
						"regular" : "18px",
						"grande"  : "20px",
					}}
					align="left"
					gapSpacing="14px"
					sheetNo={sheetNo}
					textShell={() => <TextShell.BodyIndices align="left" />}
					data={textInsertion(data?.text[1], defaultIndices, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
					textNo={1}
				/>
			</Stack>
		</Flex>
	);
};

export default Mod52;
