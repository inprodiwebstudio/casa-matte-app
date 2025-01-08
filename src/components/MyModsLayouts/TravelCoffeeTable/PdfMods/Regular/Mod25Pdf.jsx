import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod25Pdf = ({text}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: left;'><span style='font-size: 18px; font-family: JosefinSans-Light;'>Title</span></p>";

	const text02 = text[1] ? text[1] : "<p style='text-align: justify;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>Vivamus non eros non elit placerat ullamcorper sit amet nec lorem. Nunc eget placerat mi. Aliquam magna felis, fermentum ac metus at, convallis pellentesque felis. Nulla purus eros, laoreet et varius eu, feugiat non tortor. Phasellus molestie consequat rhoncus. Etiam pretium euismod magna, ac varius metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus quis magna tincidunt, varius purus eget, vestibulum orci. Morbi augue magna, commodo eu ipsum id, lobortis pellentesque ante. Vestibulum sed interdum magna, id consectetur justo. Ut vitae ultrices magna, eget blandit nibh. Curabitur et turpis augue. Nunc eu turpis hendrerit, scelerisque neque eget, tristique nisl. Maecenas erat neque, consequat a dapibus sit amet, ullamcorper vitae leo.<br /><br />Aenean sed ante molestie mauris hendrerit tempor at vel dui. Praesent tincidunt nunc dui, vel euismod nisl tristique ac. Phasellus eleifend condimentum leo sit amet semper. Donec sem sapien, vehicula quis euismod eget, varius vel ligula. Pellentesque vel justo viverra, semper dolor in, auctor ante. Curabitur ac rhoncus nunc. Curabitur lorem dolor, aliquet vitae ultricies eget, auctor id elit. Quisque facilisis molestie dolor vel porta. Aenean blandit diam diam. Aenean elementum non justo ut posuere. Vivamus blandit metus vitae dui imperdiet, ornare viverra ipsum sagittis. Curabitur porttitor velit quis feugiat tincidunt. Etiam venenatis tristique ante, ut tristique elit tempus a. Nulla porttitor velit eu eros sollicitudin, ut eleifend lorem cursus. Fusce rhoncus massa odio.<br/><br/>Suspendisse quis enim scelerisque, vehicula risus at, consectetur orci. Pellentesque eget egestas purus. Proin et ultrices neque. Ut dictum feugiat tincidunt. Sed sit amet porttitor risus. Cras scelerisque molestie gravida. Praesent aliquam sapien at ligula aliquet consectetur. Maecenas et eros fermentum, euismod justo at, mollis orci. Integer ultricies magna quis sem porta dictum.</span></p>";

	const bodyHtml = (
		<div
			style={{
				height        : "850px",
				width         : "100%",
				padding       : "25.2%",
				paddingTop    : "15%",
				paddingBottom : "15%",
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
					width          : "100%",
					display        : "flex",
					justifyContent : "center",
					alignItems     : "center",
					flexDirection  : "column",
					gap            : "30px",
				}}>
					<div
						style={{
							width         : "100%",
							display       : "flex",
							flexDirection : "column",
							gap           : "0px",
						}}
					>
						<div
							style={{
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
					</div>
					<div
						style={{
							width : "100%",
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

export default Mod25Pdf;
