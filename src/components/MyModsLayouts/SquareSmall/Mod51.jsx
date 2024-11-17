import {Stack, Flex } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod51 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultTitle = "<p style='text-align: left;'><span style='font-size: 24px; font-family: Aitana-Regular;'>VIRGINIA</span></p>";

	const defaultIndices = "<p style='text-align: left;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>Colonial Williamsburg</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>William & Mary University</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>The Capitol</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>Jamestown</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>Smithfeld</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>Chepokee Plantation</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>Waller Mill Park</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>Richmond</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>Ford’s Colony</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>St. Andrew’s</span></p>";

	return (
		<Flex
			p="10%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				spacing="0.2em"
				sx={{overflow : "hidden"}}
				w={"45%"}
			>
				<Stack
					spacing="0.2em"
				>
					<Text
						sizes={{
							"chico"   : "22px",
							"regular" : "24px",
							"grande"  : "26px",
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
						"chico"   : "15px",
						"regular" : "18px",
						"grande"  : "20px",
					}}
					align="left"
					gapSpacing="12px"
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

export default Mod51;
