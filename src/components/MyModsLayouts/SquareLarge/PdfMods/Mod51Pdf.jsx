import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html             from "react-pdf-html";
import ReactDOMServer   from "react-dom/server";
import DividerLayoutPdf from "components/LayoutHandler/DividerLayoutPdf";


const Mod51Pdf = ({text}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: left;'><span style='font-size: 34px; font-family: JosefinSans-Light;'>ESPAÑA</span></p>";

	const text02 = text[1] ? text[1] : "<p style='text-align: left;'><span style='font-size: 34px; font-family: JosefinSans-Light;'>FRANCIA</span></p>";

	const text03 = text[2] ? text[2] : "<p style='text-align: left;'><span style='font-size: 34px; font-family: JosefinSans-Light;'>TURQUÍA</span></p>";

	const text04 = text[3] ? text[3] : "<p style='text-align: left;'><span style='font-size: 20px; font-family: Inter-Lifght;'>Madrid</span></p><p style='text-align: left;'><span style='font-size: 20px; font-family: Inter-Lifght;'>Segovia</span></p><p style='text-align: left;'><span style='font-size: 20px; font-family: Inter-Lifght;'>Salamanca</span></p>";

	const text05 = text[4] ? text[4] : "<p style='text-align: left;'><span style='font-size: 20px; font-family: Inter-Lifght;'>París</span></p><p style='text-align: left;'><span style='font-size: 20px; font-family: Inter-Lifght;'>Versalles</span></p>";

	const text06 = text[5] ? text[5] : "<p style='text-align: left;'><span style='font-size: 20px; font-family: Inter-Lifght;'>Estambul</span></p><p style='text-align: left;'><span style='font-size: 20px; font-family: Inter-Lifght;'>Capadocia</span></p>";

	const bodyHtml = (
		<div
			style={{
				height  : "850px",
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
					width          : "40%",
					height         : "100%",
					display        : "flex",
					flexDirection  : "column",
					gap            : "45px",
					justifyContent : "center",
					alignItems     : "center",
				}}>
					<div
						style={{
							width          : "100%",
							display        : "flex",
							flexDirection  : "column",
							gap            : "18px",
							justifyContent : "flex-start",
							alignItems     : "flex-start",
						}}
					>
						<div
							style={{
								letterSpacing : "2.7px",
								textTransform : "uppercase",
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
						<div
							style={{
								width          : "100%",
								display        : "flex",
								alignItems     : "flex-Start",
								justifyContent : "flex-Start",
							}}
						>
							<DividerLayoutPdf w="26px" />
						</div>
						<div
							style={{
								letterSpacing : "0.5px",
								lineHeight    : "2.5px",
								textTransform : "uppercase",
							}}
							dangerouslySetInnerHTML={{
								__html : `<style>
                                   p {
                                     margin: 0;
                                     padding: 0;
                                   }
                                 </style>
                                 ${text04}`,
							}}
						/>
					</div>
					<div
						style={{
							width          : "100%",
							display        : "flex",
							flexDirection  : "column",
							gap            : "18px",
							justifyContent : "flex-start",
							alignItems     : "flex-start",
						}}
					>
						<div
							style={{
								letterSpacing : "2.7px",
								textTransform : "uppercase",
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
						<div
							style={{
								width          : "100%",
								display        : "flex",
								alignItems     : "flex-Start",
								justifyContent : "flex-Start",
							}}
						>
							<DividerLayoutPdf w="26px" />
						</div>
						<div
							style={{
								letterSpacing : "0.5px",
								lineHeight    : "2.5px",
								textTransform : "uppercase",
							}}
							dangerouslySetInnerHTML={{
								__html : `<style>
                                   p {
                                     margin: 0;
                                     padding: 0;
                                   }
                                 </style>
                                 ${text05}`,
							}}
						/>
					</div>
					<div
						style={{
							width          : "100%",
							display        : "flex",
							flexDirection  : "column",
							gap            : "18px",
							justifyContent : "flex-start",
							alignItems     : "flex-start",
						}}
					>
						<div
							style={{
								letterSpacing : "2.7px",
								textTransform : "uppercase",
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
						<div
							style={{
								width          : "100%",
								display        : "flex",
								alignItems     : "flex-Start",
								justifyContent : "flex-Start",
							}}
						>
							<DividerLayoutPdf w="26px" />
						</div>
						<div
							style={{
								letterSpacing : "0.5px",
								lineHeight    : "2.5px",
								textTransform : "uppercase",
							}}
							dangerouslySetInnerHTML={{
								__html : `<style>
                                   p {
                                     margin: 0;
                                     padding: 0;
                                   }
                                 </style>
                                 ${text06}`,
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

export default Mod51Pdf;
