import { Flex, Stack } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod44 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {
	const defaultText01 = "<p style='text-align: left;'><span style='font-size: 16px; font-family: Aitana-Regular;'>MAMÁ</span></p>";

	const defaultText02 = "<p style='text-align: justify;'><span style='font-size: 10px; font-family: Spectral-Light-Italic;'>Obunte cone ingul utura dem fue crissendeli, quit, patam dienterendam med cont. Grat vit, vidensupere, note foridiortui serobse nerox ses, o unum untuam num sentrar idicaed Catus, nor ad mo egilincultus bonsum perunti, Catim quodiemum, num ac mum vestratu istiost ritabutem in notabus nequem invem omnius contimp otisquam factorei tario taremo inatam in stre manteliis, et is? P. Sati publin videt verraticae esimoris. La aurnicae que ponsula tqueruntere vereorum Patum quam ac ingulin prorte, quitus ili in temussedo, num pata verobse ntiam.</span></p>";

	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				w="51%"
				mah="70%"
				spacing={isInWorkSpace ? "18px" : "0.2em"}
				aria-hidden
			>
				<Flex
					direction="column"
					gap={isInWorkSpace ? "14px" : "0.1em"}
					justify="center"
				>
					<div
						style={{
							width : "100%",
						}}
						{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
					>
						<Text
							sizes={{
								"chico"   : "18px",
								"regular" : "20px",
								"grande"  : "23px",
							}}
							typeText="subtitle"
							align="left"
							letterSpacing="1px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.SubTitle width="50%" align="flex-start" />}
							data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={0}
						/>
					</div>
					<DividerLayout long={isInWorkSpace ? "9%" : "10%"} position="h" />
				</Flex>
				<Flex
					justify="flex-start"
					direction="column"
				>
					<div
						style={{
							width : "100%",
						}}
						{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text2` })}
					>
						<Text
							sizes={{
								"chico"   : "8px",
								"regular" : "10px",
								"grande"  : "13px",
							}}
							typeText="body"
							align="justify"
							lineHeight="13px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.BodyParagraph align="flex-start" />}
							data={textInsertion(data?.text[1], defaultText02, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={1}
						/>
					</div>
				</Flex>
			</Stack>
		</Flex>
	);
};

export default Mod44;
