import { Flex, Stack } from "@mantine/core";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod32 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {
	const defaultIndice01 = "<p style='text-align: center;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Madrid</span></p><p style='text-align: center;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Segovia</span></p><p style='text-align: center;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Salamanca</span></p><p style='text-align: center;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Madrid</span></p><p style='text-align: center;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Segovia</span></p><p style='text-align: center;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Salamanca</span></p>";

	return (
		<Flex
			w="100%"
			h="100%"
			justify="center"
			align="center"
			direction="column"
			sx={{overflow : "hidden"}}
			{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
		>
			<Stack
				spacing="0.35em"
				miw="30%"
			>
				<div
					style={{
						textTransform : "uppercase",
					}}
				>
					<TextFix
						sizes={{
							"chico"   : "12px",
							"regular" : "14px",
							"grande"  : "16px",
						}}
						align="center"
						lineHeight={"0.3em"}
						gapSpacing="10px"
						sheetNo={sheetNo}
						textShell={() => <TextShell.BodyIndices align="center" />}
						data={textInsertion(data?.text[1], defaultIndice01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={1}
					/>
				</div>
			</Stack>
		</Flex>
	);
};

export default Mod32;
