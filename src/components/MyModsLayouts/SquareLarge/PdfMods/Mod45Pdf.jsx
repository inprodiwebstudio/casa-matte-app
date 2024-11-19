import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html             from "react-pdf-html";
import ReactDOMServer   from "react-dom/server";
import DividerLayoutPdf from "components/LayoutHandler/DividerLayoutPdf";


const Mod45Pdf = ({text}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: left;'><span style='font-size: 30px; font-family: Aitana-Regular;'>MAMÁ</span></p>";

	const text02 = text[1] ? text[1] : "<p style='text-align: justify;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>Obunte cone ingul utura dem fue crissendeli, quit, patam dienterendam med cont. Grat vit, vidensupere, note foridiortui serobse nerox ses, o unum untuam num sentrar idicaed Catus, nor ad mo egilincultus bonsum perunti, Catim quodiemum, num ac mum vestratu istiost ritabutem in notabus nequem invem omnius contimp otisquam factorei tario taremo inatam in stre manteliis, et is? P. Sati publin videt verraticae esimoris. La aurnicae que ponsula tqueruntere vereorum Patum quam ac ingulin prorte, quitus ili in temussedo, num pata verobse ntiam.</span></p>";

	const bodyHtml = (
		<div
			style={{
				height  : "850px",
				width   : "100%",
				padding : "40px",
			}}
		>

			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					justifyContent : "flex-end",
					alignItems     : "flex-end",
					gap            : "20px",
				}}
			>
				<div style={{
					width          : "100%",
					height         : "100%",
					display        : "flex",
					alignItems     : "flex-end",
					justifyContent : "flex-end",
				}}>
					<div
						style={{
							width         : "415px",
							display       : "flex",
							flexDirection : "column",
							gap           : "30px",
						}}
					>
						<div
							style={{
								width         : "100%",
								display       : "flex",
								flexDirection : "column",
								alignItems    : "flex-start",
								gap           : "30px",
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
							<DividerLayoutPdf w="10%" />
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
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod45Pdf;
