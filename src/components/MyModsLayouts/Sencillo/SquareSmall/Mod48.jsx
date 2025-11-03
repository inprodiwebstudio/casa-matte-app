import { Flex, Stack, Center } from "@mantine/core";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
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

	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 26px; font-family: JosefinSans-Light;'>JAPÓN</span></p>";

	const defaultText02 = "<p style='text-align: center;'><span style='font-size: 18px; font-family: JosefinSans-Light;'>TOKIO</span></p><p style='text-align: center;'><span style='font-size: 18px; font-family: JosefinSans-Light;'>KAMAKURA</span></p><p style='text-align: center;'><span style='font-size: 18px; font-family: JosefinSans-Light;'>KIOTO</span></p><p style='text-align: center;'><span style='font-size: 18px; font-family: JosefinSans-Light;'>NARA</span></p><p style='text-align: center;'><span style='font-size: 18px; font-family: JosefinSans-Light;'>NAOSHIMA</span></p>";

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
				spacing="0.3em"
				aria-hidden
				sx={{
					overflow : "hidden",
				}}
			>
				<Stack
					spacing={isInWorkSpace ? "0.13em" : "0.2em"}
					w="100%"
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
				>
					<TextFix
						sizes={{
							"chico"   : "22px",
							"regular" : "26px",
							"grande"  : "28px",
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
						<DividerLayout long="0.3em" position="h" />
					</Center>
				</Stack>
				<div
					style={{
						width : "100%",
					}}
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text2` })}
				>
					<TextFix
						sizes={{
							"chico"   : "15px",
							"regular" : "18px",
							"grande"  : "20px",
						}}
						align="center"
						sheetNo={sheetNo}
						gapSpacing="24px"
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
