import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod70Pdf = ({text, images}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: left;'><span style='font-size: 18px; font-family: JosefinSans-Light;'>Subtítulo 3</span></p>";
	const text02 = text[1] ? text[1] : "<p style='text-align: justify;'><span style='font-size: 15px; font-family: JosefinSans-Light;'>Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur feugiat natoque vel nisi est, lacinia in sociis sodales luctus integer. Lectus conubia libero proin tempus molestie feugiat posuere ullamcorper placerat fringilla, litora consequat torquent habitasse commodo inceptos lobortis velit vulputate, magna natoque integer euismod suscipit gravida scelerisque cras aliquet. Tincidunt velit viverra dignissim ridiculus taciti rhoncus nibh senectus semper, pharetra odio conubia dictumst malesuada lectus dis penatibus, primis orci dictum sociosqu nam platea parturient cursus.</span></p><br/><p style='text-align: justify;'><span style='font-size: 15px; font-family: JosefinSans-Light;'></span></p><p style='text-align: justify;'><span style='font-size: 15px; font-family: JosefinSans-Light;'>Et maecenas ante viverra potenti libero purus habitasse aliquam, non massa vivamus dictumst eu erat sodales cursus, integer lacinia rutrum urna aliquet convallis scelerisque. Volutpat condimentum quis taciti fames tempor sagittis eleifend nostra donec, proin ad dis nec sollicitudin dictum viverra semper ridiculus, potenti feugiat odio tellus nisl curabitur nunc phasellus. Luctus iaculis suscipit inceptos mollis quisque nam cum turpis cras, class ante risus ultricies dapibus justo suspendisse enim, cubilia feugiat sed est dui lacinia diam vivamus.</span></p><br/><p style='text-align: justify;'><span style='font-size: 15px; font-family: JosefinSans-Light;'></span></p><p style='text-align: justify;'><span style='font-size: 15px; font-family: JosefinSans-Light;'>Curabitur quis eleifend tellus. Mauris venenatis accumsan magna, nec mattis ex molestie sit amet. Cras dignissim faucibus volutpat. Suspendisse egestas odio in libero imperdiet bibendum. Suspendisse eleifend dictum sagittis. Nam urna mi, vestibulum eget erat finibus, cursus vehicula elit. Donec imperdiet luctus tincidunt. Sed id vulputate felis. Donec sagittis feugiat ornare. Ut lacinia vehicula lacus non pretium.</span></p></span></p><br/><p style='text-align: justify;'><span style='font-size: 15px; font-family: JosefinSans-Light;'></span></p><p style='text-align: justify;'><span style='font-size: 15px; font-family: JosefinSans-Light;'>Ut tempor convallis elit, eu placerat erat venenatis ac. Cras vitae pretium augue, eget facilisis sapien. Nulla facilisi. Aliquam erat volutpat. Quisque ut viverra neque. Nulla hendrerit nisl non fermentum dictum. Quisque iaculis cursus cursus. Vestibulum id commodo neque, ac posuere purus.</span></p>";

	const bodyHtml = (
		<div
			style={{
				height         : "850px",
				width          : "100%",
				padding        : "8%",
				display        : "flex",
				alignItems     : "center",
				justifyContent : "center",
			}}
		>
			<div
				style={{
					width         : "56%",
					maxHeight     : "90%",
					display       : "flex",
					flexDirection : "column",
					gap           : "25px",
					overflow      : "hidden",
				}}
			>
				<div
					style={{
						width         : "100%",
						letterSpacing : "1.7px",
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
				<div
					style={{
						width         : "100%",
						letterSpacing : "0.5px",
						lineHeight    : "1.2px",
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

export default Mod70Pdf;
