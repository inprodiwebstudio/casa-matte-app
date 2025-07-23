import { Flex, Stack, Center } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod47 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 25px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaultText02 = "<p style='text-align: center;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Índice 1</span></p><p style='text-align: center;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Índice 2</span></p><p style='text-align: center;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Índice 3</span></p><p style='text-align: center;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Índice 4</span></p>";


	return (
		<Flex
			p="8%"
			pb="5%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				w="90%"
				mah="80%"
				spacing="0.2em"
				aria-hidden
				sx={{
					overflow : "hidden",
				}}
				align="center"
			>
				<Stack
					spacing={
						isInWorkSpace ? "0.12em" : "0.13em"
					}
					w={isInWorkSpace ? "100%" : "40%"}
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
				>
					<Text
						sizes={{
							"chico"   : "22px",
							"regular" : "26px",
							"grande"  : "28px",
						}}
						typeText="subtitle"
						letterSpacing="2px"
						sheetNo={sheetNo}
						textShell={() => <TextShell.Title width="100%" align="center" />}
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
					<Center>
						<DividerLayout long="0.3em" position="v" />
					</Center>
				</Stack>
				<div
					style={{
						width : isInWorkSpace ? "100%" : "50%",
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
						gapSpacing="10px"
						letterSpacing={"1px"}
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

export default Mod47;
