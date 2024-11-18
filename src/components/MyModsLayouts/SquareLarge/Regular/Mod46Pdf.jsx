import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod46Pdf = ({text}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: left;'><span style='font-size: 20px; font-family: JosefinSans-Light;'>MARÍA:</span></p>";

	const text02 = text[1] ? text[1] : "<p style='text-align: justify;'><span style='font-size: 10px; font-family: JosefinSans-Light;'>Obunte cone ingul utura dem fue crissendeli, quit, patam dienterendam med cont. Grat vit, vidensupere, note foridiortui serobse nerox ses, o unum untuam num sentrar idicaed Catus, nor ad mo egilincultus bonsum perunti, Catim quodiemum, num ac mum vestratu istiost ritabutem in notabus nequem invem omnius contimp otisquam factorei tario taremo inatam in stre manteliis, et is? P. Sati publin videt verraticae esimoris. La aurnicae que ponsula tqueruntere vereorum Patum quam ac ingulin prorte, quitus ili in temussedo, num pata verobse ntiam.</span></p><br/><p style='text-align: justify;'><span style='font-size: 10px; font-family: JosefinSans-Light;'></span></p><p style='text-align: justify;'><span style='font-size: 10px; font-family: JosefinSans-Light;'>Erri, furo, P. Ullatas treviri strae ta, delaris plinatum morunum sulatum sum esum Patum consulocaes consil hilium intemqu itesusces liis, nonsupiorum adhuiuscero eliis aus comnequam facips, num vere aridien terum. Catem. Sim ore poporisse forum ner uri ponlocu picatam me etortes tilius actuam pra? Mei sename auconum prorei ina, credica ad sedicatat. Unum acrenihiciam inte adducon suspionsulis cupiese strionsum, probse cotiae crem immorimus virmilius cotem tus, cont. Catum, vivir locaecre de tum aut que num sesidet erficonihi, conte detil verdis.</span></p><br/><p style='text-align: justify;'><span style='font-size: 10px; font-family: JosefinSans-Light;'></span></p><p style='text-align: justify;'><span style='font-size: 10px; font-family: JosefinSans-Light;'>Averfic iverica elium, C. Vere, quo iu vissen des Catidie inte consilia atia es convent erternum etre crena, intrum, clute et? Os, uro C. Ifessedeo, clus proxime mo virisqua tum que ne milicortius, supicaet niquium inicula videt omprit.</span></p>";

	const bodyHtml = (
		<div
			style={{
				height  : "595px",
				width   : "100%",
				padding : "60px",
			}}
		>

			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					justifyContent : "center",
					alignItems     : "center",
					gap            : "20px",
				}}
			>
				<div style={{
					width          : "100%",
					display        : "flex",
					alignItems     : "center",
					justifyContent : "center",
				}}>
					<div
						style={{
							width         : "80%",
							display       : "flex",
							flexDirection : "column",
							gap           : "20px",
						}}
					>
						<div
							style={{
								width         : "100%",
								display       : "flex",
								flexDirection : "column",
								alignItems    : "flex-start",
								gap           : "10px",
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
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod46Pdf;
