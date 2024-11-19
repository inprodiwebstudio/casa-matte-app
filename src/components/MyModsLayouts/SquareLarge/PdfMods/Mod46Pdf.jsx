import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html             from "react-pdf-html";
import ReactDOMServer   from "react-dom/server";
import DividerLayoutPdf from "components/LayoutHandler/DividerLayoutPdf";


const Mod46Pdf = ({text}) => {
	const text01 = text[0] ? text[0] :  "<p style='text-align: left;'><span style='font-size: 30px; font-family: Aitana-Regular;'>PAPÁ</span></p>";

	const text02 = text[1] ? text[1] : "<p style='text-align: justify;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>Obunte cone ingul utura dem fue crissendeli, quit, patam dienterendam med cont. Grat vit, vidensupere, note foridiortui serobse nerox ses, o unum untuam num sentrar idicaed Catus, nor ad mo egilincultus bonsum perunti, Catim quodiemum, num ac mum vestratu istiost ritabutem in notabus nequem invem omnius contimp otisquam factorei tario taremo inatam in stre</span></p>";

	const text03 = text[2] ? text[2] : "<p style='text-align: justify;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>manteliis, et is? P. Sati publin videt verraticae esimoris. La aurnicae que ponsula tqueruntere vereorum Patum quam ac ingulin prorte, quitus ili in temussedo, num pata verobse ntiam. Obunte cone ingul utura dem fue crissendeli, quit, patam dienterendam med cont. Grat vit, vidensupere, note foridiortui serobse nerox ses, o unum untuam num sentrar idicaed.</span></p>";

	const bodyHtml = (
		<div
			style={{
				height         : "850px",
				width          : "100%",
				paddingTop     : "60px",
				paddingBottom  : "60px",
				display        : "flex",
				justifyContent : "center",
				alignItems     : "center",
			}}
		>
			<div
				style={{
					height         : "100%",
					width          : "80%",
					display        : "flex",
					justifyContent : "center",
					alignItems     : "center",
					gap            : "30px",
				}}
			>
				<div style={{
					width          : "100%",
					display        : "flex",
					flexDirection  : "column",
					alignItems     : "flex-start",
					justifyContent : "flex-start",
					gap            : "30px",
				}}>
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
						display        : "flex",
						flexDirection  : "row",
						justifyContent : "space-between",
						width          : "100%",
						height         : "auto",
					}}
				>
					<div
						style={{
							width : "48%",
						}}
					>
						<div
							style={{
								lineHeight : "1.5px",
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
					<div
						style={{
							width : "48%",
						}}
					>
						<div
							style={{
								lineHeight : "1.5px",
							}}
							dangerouslySetInnerHTML={{
								__html : `<style>
                                   p {
                                     margin: 0;
                                     padding: 0;
                                   }
                                 </style>
                                 ${text03}`,
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
