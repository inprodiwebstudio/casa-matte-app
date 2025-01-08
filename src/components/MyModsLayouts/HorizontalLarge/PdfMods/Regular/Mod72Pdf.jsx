import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html             from "react-pdf-html";
import ReactDOMServer   from "react-dom/server";
import DividerLayoutPdf from "components/LayoutHandler/DividerLayoutPdf";


const Mod72Pdf = ({text, images}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: left;'><span style='font-size: 18px; font-family: JosefinSans-Light;'>Subtítulo 3</span></p>";

	const text02 = text[0] ? text[0] : "<p style='text-align: justify;'><span style='font-size: 15px; font-family: JosefinSans-Light;'>Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur feugiat natoque vel nisi est, lacinia in sociis sodales luctus integer. Lectus conubia libero proin tempus molestie feugiat posuere ullamcorper placerat fringilla, litora consequat torquent habitasse commodo inceptos lobortis velit vulputate, magna natoque integer euismod suscipit gravida scelerisque cras aliquet. Tincidunt velit viverra dignissim ridiculus taciti rhoncus nibh senectus semper, pharetra odio conubia dictumst malesuada lectus dis penatibus, primis orci dictum sociosqu nam platea parturient cursus.</span></p>";

	const bodyHtml = (
		<div
			style={{
				height         : "850px",
				width          : "100%",
				padding        : "4%",
				display        : "flex",
				justifyContent : "flex-end",
				alignItems     : "flex-end",
			}}
		>
			<div
				style={{
					width          : "36%",
					maxHeight      : "100%",
					display        : "flex",
					gap            : "25px",
					flexDirection  : "column",
					justifyContent : "flex-end",
					alignItems     : "flex-end",
					overflow       : "hidden",
				}}
			>
				<div
					style={{
						display        : "flex",
						width          : "100%",
						flexDirection  : "column",
						justifyContent : "flex-start",
						alignItems     : "flex-start",
						gap            : "20px",
					}}
				>
					<div
						style={{
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
					<DividerLayoutPdf w="14%" />
				</div>
				<div
					style={{
						lineHeight : "1.4px",
						width      : "100%",
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
			</div>
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod72Pdf;
