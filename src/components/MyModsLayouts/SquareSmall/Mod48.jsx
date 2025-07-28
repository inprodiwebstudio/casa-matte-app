import { Flex, Stack, Center } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod48 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 25px; font-family: JosefinSans-Light;'>TÍTULO</span></p>";

	const defaultText02 = "<p style='text-align: center;'><span style='font-size: 10px; font-family: JosefinSans-Light;'>ÍNDICE 1</span></p><p style='text-align: center;'><span style='font-size: 10px; font-family: JosefinSans-Light;'>ÍNDICE 2</span></p><p style='text-align: center;'><span style='font-size: 10px; font-family: JosefinSans-Light;'>ÍNDICE 3</span></p><p style='text-align: center;'><span style='font-size: 10px; font-family: JosefinSans-Light;'>ÍNDICE 4</span></p><p style='text-align: center;'><span style='font-size: 10px; font-family: JosefinSans-Light;'>ÍNDICE 5</span></p>";

	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				w={isInWorkSpace ? "90%" : "35%"}
				mah="80%"
				spacing={isInWorkSpace ? "35px" : "0.2em"}
				aria-hidden
				sx={{
					overflow : "hidden",
				}}
			>
				<Stack
					spacing={isInWorkSpace ? "30px" : "0.2em"}
					w="100%"
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
				>
					<Text
						sizes={{
							"chico"   : "22px",
							"regular" : "26px",
							"grande"  : "28px",
						}}
						typeText="title"
						letterSpacing="5px"
						sheetNo={sheetNo}
						textShell={() => <TextShell.Title width="100%" align="left" />}
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
					<Center>
						<DividerLayout weight="2px" long="0.3em" position="h" />
					</Center>
				</Stack>
				<div
					style={{
						width : "100%",
					}}
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text2` })}
				>
					<Text
						sizes={{
							"chico"   : "15px",
							"regular" : "18px",
							"grande"  : "20px",
						}}
						typeText="index"
						align="center"
						sheetNo={sheetNo}
						gapSpacing="15px"
						textShell={() => <TextShell.BodyIndices align="center" />}
						data={textInsertion(data?.text[1], defaultText02, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={1}
					/>
				</div>
			</Stack>
		</Flex>
	);
};

export default Mod48;
