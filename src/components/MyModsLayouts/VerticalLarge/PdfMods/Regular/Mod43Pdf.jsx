import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod43Pdf = ({text}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: left;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>MARÍA:</span></p>";

	const text02 = text[1] ? text[1] : "<p style='text-align: justify;'><span style='font-size: 12px; font-family: JosefinSans-Light;'>Obunte cone ingul utura dem fue crissendeli, quit, patam dienterendam med cont. Grat vit, vidensupere, note foridiortui serobse nerox ses, o unum untuam num sentrar idicaed Catus, nor ad mo egilincultus bonsum perunti, Catim quodiemum, num ac mum vestratu istiost ritabutem in notabus nequem invem omnius contimp otisquam factorei tario taremo inatam in stre manteliis, et is? P. Sati publin videt verraticae esimoris. La aurnicae que ponsula tqueruntere vereorum Patum quam ac ingulin prorte, quitus ili in temussedo, num pata verobse ntiam.</span></p><br><p style='text-align: justify;'><span style='font-size: 12px; font-family: JosefinSans-Light;'>Erri, furo, P. Ullatas treviri strae ta, delaris plinatum morunum sulatum sum esum Patum consulocaes consil hilium intemqu itesusces liis, nonsupiorum adhuiuscero eliis aus comnequam facips, num vere aridien terum. Catem. Sim ore poporisse forum ner uri ponlocu picatam me etortes tilius actuam pra? Mei sename auconum prorei ina, credica ad sedicatat. Unum acrenihiciam inte adducon suspionsulis cupiese strionsum, probse cotiae crem immorimus virmilius cotem tus, cont. Catum, vivir locaecre de tum aut que num sesidet erficonihi, conte detil verdis.</span></p><br/><p style='text-align: justify;'><span style='font-size: 12px; font-family: JosefinSans-Light;'>Averfic iverica elium, C. Vere, quo iu vissen des Catidie inte consilia atia es convent erternum etre crena, intrum, clute et? Os, uro C. Ifessedeo, clus proxime mo virisqua tum que ne milicortius, supicaet niquium inicula videt omprit. Epermilnem pribus, ne audem, consuliaet, crebus hocresilist omnerestrum us hos et? Ximilia Sp. Ita retiam suliste quo tes bonsus, quam, con Etra pulicaet; nonve, C. Tum supio vitiam erus, nermaxime estodius, quisquo ero imaio alari sinte reis ina mo vis senatim precus su viturei id conticibunu mod dinarit, sedis. Neque nes dientereis detiam simurni quamed dicivil intellari fue patrum ma, sulocci peropota noti intem nox mo acciterum vico nestia? Em dea iam int aut vera ve, P. At omnerte, erideat raverio rtemove rorisqu amplicae ellaris.</span></p>";

	const bodyHtml = (
		<div
			style={{
				height  : "991px",
				width   : "100%",
				padding : "20px",
			}}
		>

			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					justifyContent : "center",
					alignItems     : "center",
				}}
			>
				<div style={{
					width         : "52%",
					display       : "flex",
					flexDirection : "column",
					gap           : "20px",
				}}>
					<div
						style={{
							width         : "100%",
							display       : "flex",
							flexDirection : "column",
							alignItems    : "flex-start",
						}}
					>
						<div
							style={{
								letterSpacing : "1.7px",
							}}
							dangerouslySetInnerHTML={{
								__html : `<style>
                                   p {
                                     margin: 0;
                                     padding: 0;
                                   }
                                 </style>
                                 ${text01}`,
							}}
						/>
					</div>
					<div
						style={{
							width         : "100%",
							letterSpacing : "0.5px",
							lineHeight    : "1.5px",
						}}
						dangerouslySetInnerHTML={{
							__html : `<style>
                               p {
                                 margin: 0;
                                 padding: 0;
                               }
                             </style>
                             ${text02}`,
						}}
					/>
				</div>
			</div>
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod43Pdf;
