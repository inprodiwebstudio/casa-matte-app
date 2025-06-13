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

	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 26px; font-family: Aitana-Regular;'>ESPAÑA</span></p>";

	const defaultText02 = "<p style='text-align: center;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>Madrid</span></p><p style='text-align: center;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>Segovia</span></p><p style='text-align: center;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>Toledo</span></p><p style='text-align: center;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>Salamanca</span></p>";


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
				w="50%"
				mah="80%"
				spacing="0.2em"
				aria-hidden
				sx={{
					overflow : "hidden",
				}}
			>
				<Stack
					spacing={
						isInWorkSpace ? "0.12em" : "0.13em"
					}
					w="100%"
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
				>
					<Text
						sizes={{
							"chico"   : "22px",
							"regular" : "26px",
							"grande"  : "28px",
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
						<DividerLayout long="0.4em" position="v" />
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
						align="center"
						sheetNo={sheetNo}
						gapSpacing="10px"
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
