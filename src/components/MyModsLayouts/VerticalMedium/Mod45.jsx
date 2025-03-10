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
	keyIndex,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 42px; font-family: JosefinSans-Light;'>JAPÓN</span></p>";

	const defaultText02 = "<p style='text-align: center;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>TOKIO</span></p><p style='text-align: center;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>KAMAKURA</span></p><p style='text-align: center;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>KIOTO</span></p><p style='text-align: center;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>NARA</span></p><p style='text-align: center;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>NAOSHIMA</span></p>";

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
				spacing="0.35em"
				aria-hidden
				sx={{
					overflow : "hidden",
				}}
			>
				<Stack
					spacing="8px"
					w="100%"
					id={`${pageNo}-${keyIndex}-${modLayout}-text1`}
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
						<DividerLayout long="0.3em" position="h" />
					</Center>
				</Stack>
				<div
					id={`${pageNo}-${keyIndex}-${modLayout}-text2`}
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

export default Mod48;
