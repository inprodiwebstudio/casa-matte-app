import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html             from "react-pdf-html";
import ReactDOMServer   from "react-dom/server";
import DividerLayoutPdf from "components/LayoutHandler/DividerLayoutPdf";


const Mod71Pdf = ({text, images}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: left;'><span style='font-size: 18px; font-family: JosefinSans-Light;'>EC</span></p>";

	const text02 = text[1] ? text[1] : "<p style='text-align: justify;'><span style='font-size: 15px; font-family: JosefinSans-Light;'>Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur feugiat natoque vel nisi est, lacinia in sociis sodales luctus integer. Lectus conubia libero proin tempus molestie feugiat posuere ullamcorper placerat fringilla, litora consequat torquent habitasse commodo inceptos lobortis velit vulputate, magna natoque integer euismod suscipit gravida scelerisque cras aliquet. Tincidunt velit viverra dignissim ridiculus taciti rhoncus nibh senectus semper, pharetra odio conubia dictumst malesuada lectus dis penatibus, primis orci dictum sociosqu nam platea parturient cursus.</span></p>";

	const text03 = text[2] ? text[2] : "<p style='text-align: justify;'><span style='font-size: 15px; font-family: JosefinSans-Light;'>Et maecenas ante viverra potenti libero purus habitasse aliquam, non massa vivamus dictumst eu erat sodales cursus, integer lacinia rutrum urna aliquet convallis scelerisque. Volutpat condimentum quis taciti fames tempor sagittis eleifend nostra donec, proin ad dis nec sollicitudin dictum viverra semper ridiculus, potenti feugiat odio tellus nisl curabitur nunc phasellus. Luctus iaculis suscipit inceptos mollis quisque nam cum turpis cras, class ante risus ultricies dapibus justo suspendisse enim, cubilia feugiat sed est dui lacinia diam vivamus.</span></p>";

	const bodyHtml = (
		<div
			style={{
				height         : "850px",
				paddingLeft    : "23%",
				paddingRight   : "23%",
				width          : "100%",
				display        : "flex",
				alignItems     : "center",
				justifyContent : "center",
			}}
		>
			<div
				style={{
					width         : "100%",
					maxHeight     : "90%",
					display       : "flex",
					flexDirection : "column",
					gap           : "25px",
					overflow      : "hidden",
				}}
			>
				<div
					style={{
						display        : "flex",
						flexDirection  : "column",
						gap            : "25px",
						width          : "100%",
						alignItems     : "flex-start",
						justifyContent : "flex-start",
					}}
				>
					<div
						style={{
							width         : "100%",
							letterSpacing : "3px",
							textTransform : "uppercase",
						}}
					>
						<div
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
					<DividerLayoutPdf w="8%" />
				</div>
				<div
					style={{
						width          : "100%",
						display        : "flex",
						flexDirection  : "row",
						justifyContent : "space-between",
						overflow       : "hidden",
					}}
				>
					<div
						style={{
							width      : "48%",
							lineHeight : "1.5px",
						}}
					>
						<div
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
							width      : "48%",
							lineHeight : "1.5px",
						}}
					>
						<div
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

export default Mod71Pdf;
