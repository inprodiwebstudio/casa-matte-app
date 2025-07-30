import { Flex, Stack } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod43 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	keyIndex,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: left;'><span style='font-size: 15px; font-family: JosefinSans-Light;'>TÍTULO:</span></p>";

	const defaultText02 = "<p style='text-align:justify;'><span style='font-family:JosefinSans-Light;font-size:12px;'>Obunte cone ingul utura dem fue crissendeli, quit, patam dienterendam med cont. Grat vit, vidensupere, note foridiortui serobse nerox ses, o unum untuam num sentrar idicaed Catus, nor ad mo egilincultus bonsum perunti, Catim quodiemum, num ac mum vestratu istiost ritabutem in notabus nequem invem omnius contimp otisquam factorei tario taremo inatam in stre manteliis, et is? P. Sati publin videt verraticae esimoris. La aurnicae que ponsula tqueruntere vereorum Patum quam ac ingulin prorte, quitus ili in temussedo, num pata verobse ntiam.</span></p><p style='text-align:justify;'>&nbsp;</p><p style='text-align:justify;'><span style='font-family:JosefinSans-Light;'>Erri, furo, P. Ullatas treviri strae ta, delaris plinatum morunum sulatum sum esum Patum consulocaes consil hilium intemqu itesusces liis, nonsupiorum adhuiuscero eliis aus comnequam facips, num vere aridien terum. Catem.</span></p><p style='text-align:justify;'><span style='font-family:JosefinSans-Light;'>Sim ore poporisse forum ner uri ponlocu picatam me etortes tilius actuam pra? Mei sename auconum prorei ina, credica ad sedicatat. Unum acrenihiciam inte adducon suspionsulis cupiese strionsum, probse cotiae crem immorimus virmilius cotem tus, cont. Catum, vivir locaecre de tum aut que num sesidet erficonihi, conte detil verdis.</span></p><p style='text-align:justify;'>&nbsp;</p><p style='text-align:justify;'><span style='font-family:JosefinSans-Light;'>Averfic iverica elium, C. Vere, quo iu vissen des Catidie inte consilia atia es convent erternum etre crena, intrum, clute et? Os, uro C. Ifessedeo, clus proxime mo virisqua tum que ne milicortius, supicaet niquium inicula videt omprit. Epermilnem pribus, ne audem, consuliaet, crebus hocresilist omnerestrum us hos et? Ximilia Sp. Ita retiam suliste quo tes bonsus, quam, con Etra pulicaet; nonve, C. Tum supio vitiam erus, nermaxime estodius, quisquo ero imaio alari sinte reis ina mo vis senatim precus su viturei id conticibunu mod dinarit, sedis. Neque nes dientereis detiam simurni quamed dicivil intellari fue patrum ma, sulocci peropota noti intem nox mo acciterum vico nestia? Em dea iam int aut vera ve, P. At omnerte, erideat raverio rtemove rorisqu amplicae ellaris.</span></p><p style='text-align:justify;'>&nbsp;</p><p style='text-align:justify;'><span style='font-family:JosefinSans-Light;'>Jero.</span></p>";

	return (
		<Flex
			p="0%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				w={isInWorkSpace ? "63%" : "50%"}
				mah="90%"
				spacing={isInWorkSpace ? "0.15em" : "0.2em"}
				aria-hidden
				style={{overflow : "hidden"}}
			>
				<div
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
				>
					<Text
						sizes={{
							"chico"   : "14px",
							"regular" : "15px",
							"grande"  : "16px",
						}}
						letterSpacing="1.7px"
						typeText="subtitle"
						align="left"
						sheetNo={sheetNo}
						textShell={() => <TextShell.SubTitle width="50%" align="flex-start" />}
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
				</div>
				<div
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text2` })}
				>
					<Text
						sizes={{
							"chico"   : "11px",
							"regular" : "12px",
							"grande"  : "13px",
						}}
						align="justify"
						letterSpacing="0.5px"
						typeText="body"
						lineHeight={"15px"}
						sheetNo={sheetNo}
						textShell={() => <TextShell.BodyParagraph align="flex-start" />}
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

export default Mod43;
