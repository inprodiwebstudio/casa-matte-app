import { Flex, Stack, Center } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod27 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 28px; font-family: Aitana-Regular;'>ESPAÑA</span></p>";

	const defaultText02 = "<p style='text-align: center;'><span style='font-size: 16px; font-family: Spectral-Light-Italic;'>Madrid</span></p><p style='text-align: center;'><span style='font-size: 16px; font-family: Spectral-Light-Italic;'>Segovia</span></p><p style='text-align: center;'><span style='font-size: 16px; font-family: Spectral-Light-Italic;'>Toledo</span></p><p style='text-align: center;'><span style='font-size: 16px; font-family: Spectral-Light-Italic;'>Salamanca</span></p>";


	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
			{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
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
					spacing="0.3em"
					w="100%"
				>
					<Text
						sizes={{
							"chico"   : "26px",
							"regular" : "28px",
							"grande"  : "30px",
						}}
						letterSpacing="5px"
						sheetNo={sheetNo}
						textShell={() => <TextShell.Title width="100%" align="center" />}
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
					<Center>
						<DividerLayout long="15%" position="h" />
					</Center>
				</Stack>
				<Text
					sizes={{
						"chico"   : "14px",
						"regular" : "16px",
						"grande"  : "18px",
					}}
					align="center"
					sheetNo={sheetNo}
					gapSpacing="12px"
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

export default Mod27;
