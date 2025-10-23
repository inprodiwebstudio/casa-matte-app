import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod28 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultTitle01 = "<p style='text-align: left;'><span style='font-size: 20px; font-family: Aitana-Regular;'>ESPAÑA</span></p>";

	const defaultIndice01 = "<p style='text-align: left;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Madrid</span></p><p style='text-align: left;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Segovia</span></p><p style='text-align: left;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Salamanca</span></p><p style='text-align: left;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Madrid</span></p><p style='text-align: left;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Segovia</span></p><p style='text-align: left;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Salamanca</span></p>";

	return (
		<Flex
			w="100%"
			h="100%"
			justify="center"
			align="center"
			direction="column"
			sx={{overflow : "hidden"}}
		>
			<Stack
				spacing="0.35em"
				miw="30%"
			>
				<Stack
					spacing="0.13em"
					aria-hidden
				>
					<div
						style={{
							textTransform : "uppercase",
						}}
					>
						<Text
							sizes={{
								"chico"   : "18px",
								"regular" : "20px",
								"grande"  : "24px",
							}}
							align="left"
							letterSpacing="3px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.TitleSmall width="100%" align="left" />}
							data={textInsertion(data?.text[0], defaultTitle01, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={0}
						/>
					</div>
					<DividerLayout long="0.3em" position="h" />
					<div>
						<Text
							sizes={{
								"chico"   : "12px",
								"regular" : "14px",
								"grande"  : "16px",
							}}
							align="left"
							gapSpacing="10px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.BodyIndices align="left" />}
							data={textInsertion(data?.text[1], defaultIndice01, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={1}
						/>
					</div>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod28;
