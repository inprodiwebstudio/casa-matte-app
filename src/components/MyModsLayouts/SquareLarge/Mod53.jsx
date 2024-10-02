import {Stack, Flex } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod52 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultTitle = "<p style='text-align: left;'><span style='font-size: 34px; font-family: JosefinSans-Light;'>TOSCANA</span></p>";

	const defaultIndices = "<p style='text-align: left;'><span style='font-size: 20px; font-family: Inter-Lifght;'>FLORENCIA</span></p><p style='text-align: left;'><span style='font-size: 20px; font-family: Inter-Lifght;'>ORVIETTO</span></p><p style='text-align: left;'><span style='font-size: 20px; font-family: Inter-Lifght;'>MONTALCINO</span></p><p style='text-align: left;'><span style='font-size: 20px; font-family: Inter-Lifght;'>PIENZA</span></p><p style='text-align: left;'><span style='font-size: 20px; font-family: Inter-Lifght;'>Smithfeld</span></p><p style='text-align: left;'><span style='font-size: 20px; font-family: Inter-Lifght;'>SIENNA</span></p><p style='text-align: left;'><span style='font-size: 20px; font-family: Inter-Lifght;'>BAGNO VIGNIONI</span></p><p style='text-align: left;'><span style='font-size: 20px; font-family: Inter-Lifght;'>SAN GIMINIANO</span></p><p style='text-align: left;'><span style='font-size: 20px; font-family: Inter-Lifght;'>MONTEPULCIANO</span></p><p style='text-align: left;'><span style='font-size: 20px; font-family: Inter-Lifght;'>ANTINORI</span></p>";

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
				sx={{overflow : "hidden", textTransform : "uppercase"}}
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
						"chico"   : "18px",
						"regular" : "20px",
						"grande"  : "22px",
					}}
					align="left"
					gapSpacing="25px"
					sheetNo={sheetNo}
					letterSpacing="3px"
					textShell={() => <TextShell.BodyIndices align="left" />}
					data={textInsertion(data?.text[1], defaultIndices, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
				/>
			</Stack>
		</Flex>
	);
};

export default Mod52;
