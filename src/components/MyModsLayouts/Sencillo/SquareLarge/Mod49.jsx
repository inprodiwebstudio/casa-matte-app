import { Flex, Stack, Center } from "@mantine/core";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod49 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 46px; font-family: JosefinSans-Light;'>JAPÓN</span></p>";

	const defaultText02 = "<p style='text-align: center;'><span style='font-size: 22px; font-family: JosefinSans-Light;'>TOKIO</span></p><p style='text-align: center;'><span style='font-size: 22px; font-family: JosefinSans-Light;'>KAMAKURA</span></p><p style='text-align: center;'><span style='font-size: 22px; font-family: JosefinSans-Light;'>KIOTO</span></p><p style='text-align: center;'><span style='font-size: 22px; font-family: JosefinSans-Light;'>NARA</span></p><p style='text-align: center;'><span style='font-size: 22px; font-family: JosefinSans-Light;'>NAOSHIMA</span></p>";

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
				spacing="0.5em"
				aria-hidden
				sx={{
					overflow : "hidden",
				}}
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<Stack
					spacing={isInWorkSpace ? "0.2em" : "0.3em"}
					w="100%"
				>
					<TextFix
						sizes={{
							"chico"   : "42px",
							"regular" : "46px",
							"grande"  : "48px",
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
				<TextFix
					sizes={{
						"chico"   : "20px",
						"regular" : "22px",
						"grande"  : "24px",
					}}
					align="center"
					sheetNo={sheetNo}
					gapSpacing="40px"
					textShell={() => <TextShell.BodyIndices align="center" />}
					data={textInsertion(data?.text[1], defaultText02, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
					textNo={1}
				/>
			</Stack>
		</Flex>
	);
};

export default Mod49;
