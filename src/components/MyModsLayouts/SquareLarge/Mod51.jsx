import {Stack, Flex } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod51 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultTitle = "<p style='text-align: left;'><span style='font-size: 34px; font-family: Aitana-Regular;'>VIRGINIA</span></p>";

	const defaultIndices = "<p style='text-align: left;'><span style='font-size: 22px; font-family: Spectral-Light-Italic;'>Colonial Williamsburg</span></p><p style='text-align: left;'><span style='font-size: 22px; font-family: Spectral-Light-Italic;'>William & Mary University</span></p><p style='text-align: left;'><span style='font-size: 22px; font-family: Spectral-Light-Italic;'>The Capitol</span></p><p style='text-align: left;'><span style='font-size: 22px; font-family: Spectral-Light-Italic;'>Jamestown</span></p><p style='text-align: left;'><span style='font-size: 22px; font-family: Spectral-Light-Italic;'>Smithfeld</span></p><p style='text-align: left;'><span style='font-size: 22px; font-family: Spectral-Light-Italic;'>Chepokee Plantation</span></p><p style='text-align: left;'><span style='font-size: 22px; font-family: Spectral-Light-Italic;'>Waller Mill Park</span></p><p style='text-align: left;'><span style='font-size: 22px; font-family: Spectral-Light-Italic;'>Richmond</span></p><p style='text-align: left;'><span style='font-size: 22px; font-family: Spectral-Light-Italic;'>Ford’s Colony</span></p><p style='text-align: left;'><span style='font-size: 22px; font-family: Spectral-Light-Italic;'>St. Andrew’s</span></p>";

	return (
		<Flex
			p="10%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				spacing="0.4em"
				sx={{overflow : "hidden"}}
				maw="60%"
				miw="30%"
			>
				<Stack
					spacing="0.4em"
				>
					<Text
						sizes={{
							"chico"   : "32px",
							"regular" : "34px",
							"grande"  : "36px",
						}}
						align="left"
						sheetNo={sheetNo}
						letterSpacing="3px"
						textShell={() => <TextShell.TitleSmall width="100%" align="left" />}
						data={textInsertion(data?.text[0], defaultTitle, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
					/>
					<DividerLayout long="20%" position="h" />
				</Stack>
				<Text
					sizes={{
						"chico"   : "20px",
						"regular" : "22px",
						"grande"  : "24px",
					}}
					align="left"
					gapSpacing="20px"
					sheetNo={sheetNo}
					textShell={() => <TextShell.BodyIndices align="left" />}
					data={textInsertion(data?.text[1], defaultIndices, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
				/>
			</Stack>
		</Flex>
	);
};

export default Mod51;
