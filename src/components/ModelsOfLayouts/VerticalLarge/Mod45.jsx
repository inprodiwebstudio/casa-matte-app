import { Flex, Stack, Center } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod45 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 35px; font-family: JosefinSans-Light;'>TÍTULO</span></p>";

	const defaultText02 = "<p style='text-align: center;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>Índice 1</span></p><p style='text-align: center;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>Índice 2</span></p><p style='text-align: center;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>Índice 3</span></p><p style='text-align: center;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>Índice 4</span></p><p style='text-align: center;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>Índice 5</span></p>";

	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				w="50%"
				mah="80%"
				spacing={isInWorkSpace ? "40px" : "0.3em"}
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
							"chico"   : "38px",
							"regular" : "42px",
							"grande"  : "46px",
						}}
						letterSpacing="5px"
						sheetNo={sheetNo}
						textShell={() => <TextShell.Title width="100%" align="left" />}
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
					<Center>
						<DividerLayout weight={isInWorkSpace ? "2px" : "0.015em"} long="0.3em" position="h" />
					</Center>
				</Stack>
				<div
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text2` })}
				>
					<Text
						sizes={{
							"chico"   : "12px",
							"regular" : "14px",
							"grande"  : "16px",
						}}
						align="center"
						sheetNo={sheetNo}
						gapSpacing="25px"
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

export default Mod45;
