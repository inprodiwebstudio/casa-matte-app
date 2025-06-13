import { Box, Flex, Stack } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod47 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: left;'><span style='font-size: 30px; font-family: JosefinSans-Light;'>MARÍA:</span></p>";

	const defaultText02 = "<p style='text-align: justify;'><span style='font-size: 18px; font-family: JosefinSans-Light;'>Obunte cone ingul utura dem fue crissendeli, quit, patam dienterendam med cont. Grat vit, vidensupere, note foridiortui serobse nerox ses, o unum untuam num sentrar idicaed Catus, nor ad mo egilincultus bonsum perunti, Catim quodiemum, num ac mum vestratu istiost ritabutem in notabus nequem invem omnius contimp otisquam factorei tario taremo inatam in stre manteliis, et is? P. Sati publin videt verraticae esimoris. La aurnicae que ponsula tqueruntere vereorum Patum quam ac ingulin prorte, quitus ili in temussedo, num pata verobse ntiam.</span></p><p style='text-align: justify;'><span style='font-size: 18px; font-family: JosefinSans-Light;'></span></p><p style='text-align: justify;'><span style='font-size: 18px; font-family: JosefinSans-Light;'>Erri, furo, P. Ullatas treviri strae ta, delaris plinatum morunum sulatum sum esum Patum consulocaes consil hilium intemqu itesusces liis, nonsupiorum adhuiuscero eliis aus comnequam facips, num vere aridien terum. Catem. Sim ore poporisse forum ner uri ponlocu picatam me etortes tilius actuam pra? Mei sename auconum prorei ina, credica ad sedicatat. Unum acrenihiciam inte adducon suspionsulis cupiese strionsum, probse cotiae crem immorimus virmilius cotem tus, cont. Catum, vivir locaecre de tum aut que num sesidet erficonihi, conte detil verdis.</span></p><p style='text-align: justify;'><span style='font-size: 18px; font-family: JosefinSans-Light;'></span></p><p style='text-align: justify;'><span style='font-size: 18px; font-family: JosefinSans-Light;'>Averfic iverica elium, C. Vere, quo iu vissen des Catidie inte consilia atia es convent erternum etre crena, intrum.</span></p>";

	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				w="60%"
				mah="90%"
				spacing="0.2em"
				aria-hidden
				style={{overflow : "hidden"}}
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<Text
					sizes={{
						"chico"   : "28px",
						"regular" : "30px",
						"grande"  : "32px",
					}}
					letterSpacing="3px"
					align="left"
					sheetNo={sheetNo}
					textShell={() => <Box ml="11%">
						<TextShell.SubTitle width="30%" align="flex-start" />
					</Box>}
					data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
					textNo={0}
				/>
				<Text
					sizes={{
						"chico"   : "16px",
						"regular" : "18px",
						"grande"  : "20px",
					}}
					align="justify"
					lineHeight="26px"
					sheetNo={sheetNo}
					textShell={() => <TextShell.BodyParagraph width="80%" align="center" />}
					data={textInsertion(data?.text[1], defaultText02, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
					textNo={1}
				/>
			</Stack>
		</Flex>
	);
};

export default Mod47;
