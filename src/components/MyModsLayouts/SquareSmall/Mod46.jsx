import { Flex, Stack } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod46 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultText01 = "<p style='text-align: left;'><span style='font-size: 20px; font-family: JosefinSans-Light;'>MARÍA:</span></p>";

	const defaultText02 = "<p style='text-align: justify;'><span style='font-size: 10px; font-family: JosefinSans-Light;'>Obunte cone ingul utura dem fue crissendeli, quit, patam dienterendam med cont. Grat vit, vidensupere, note foridiortui serobse nerox ses, o unum untuam num sentrar idicaed Catus, nor ad mo egilincultus bonsum perunti, Catim quodiemum, num ac mum vestratu istiost ritabutem in notabus nequem invem omnius contimp otisquam factorei tario taremo inatam in stre manteliis, et is? P. Sati publin videt verraticae esimoris. La aurnicae que ponsula tqueruntere vereorum Patum quam ac ingulin prorte, quitus ili in temussedo, num pata verobse ntiam.</span></p><p style='text-align: justify;'><span style='font-size: 10px; font-family: JosefinSans-Light;'></span></p><p style='text-align: justify;'><span style='font-size: 10px; font-family: JosefinSans-Light;'>Erri, furo, P. Ullatas treviri strae ta, delaris plinatum morunum sulatum sum esum Patum consulocaes consil hilium intemqu itesusces liis, nonsupiorum adhuiuscero eliis aus comnequam facips, num vere aridien terum. Catem. Sim ore poporisse forum ner uri ponlocu picatam me etortes tilius actuam pra? Mei sename auconum prorei ina, credica ad sedicatat. Unum acrenihiciam inte adducon suspionsulis cupiese strionsum, probse cotiae crem immorimus virmilius cotem tus, cont. Catum, vivir locaecre de tum aut que num sesidet erficonihi, conte detil verdis.</span></p><p style='text-align: justify;'><span style='font-size: 10px; font-family: JosefinSans-Light;'></span></p><p style='text-align: justify;'><span style='font-size: 10px; font-family: JosefinSans-Light;'>Averfic iverica elium, C. Vere, quo iu vissen des Catidie inte consilia atia es convent erternum etre crena, intrum, clute et? Os, uro C. Ifessedeo, clus proxime mo virisqua tum que ne milicortius, supicaet niquium inicula videt omprit.</span></p>";

	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				w="80%"
				mah="90%"
				spacing="0.1em"
				aria-hidden
				style={{overflow : "hidden"}}
			>
				<Text
					sizes={{
						"chico"   : "18px",
						"regular" : "20px",
						"grande"  : "22px",
					}}
					letterSpacing="3px"
					align="left"
					sheetNo={sheetNo}
					textShell={() => <TextShell.SubTitle width="50%" align="flex-start" />}
					data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
					textNo={0}
				/>
				<Text
					sizes={{
						"chico"   : "8px",
						"regular" : "10px",
						"grande"  : "13px",
					}}
					align="justify"
					lineHeight="10px"
					sheetNo={sheetNo}
					textShell={() => <TextShell.BodyParagraph align="flex-start" />}
					data={textInsertion(data?.text[1], defaultText02, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
					textNo={1}
				/>
			</Stack>
		</Flex>
	);
};

export default Mod46;
