import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html             from "react-pdf-html";
import ReactDOMServer   from "react-dom/server";
import DividerLayoutPdf from "components/LayoutHandler/DividerLayoutPdf";


const Mod23Pdf = ({text}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: left;'><span style='font-size: 18px; font-family: JosefinSans-Light;'>Title</span></p>";

	const text02 = text[1] ? text[1] : "<p style='text-align: justify;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa ligula, elementum hendrerit nisl in, dictum tempus ex. Vestibulum nec dui eleifend, vestibulum nibh a, fermentum mauris. Quisque at malesuada dolor. Nullam in eleifend est. In dolor dui, egestas id blandit eget, commodo quis sem. Fusce tincidunt ante ac mi luctus bibendum. Duis vitae sem pretium, aliquam est eget, imperdiet dolor. Curabitur eget augue nec tellus faucibus facilisis tristique sed lectus. Maecenas ac odio ac nisl iaculis aliquam. Nullam mattis finibus ipsum, finibus semper mauris posuere nec. Phasellus vehicula tempor mi, eget commodo magna eleifend vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec vitae eleifend mauris, eu posuere nulla. Praesent a ultrices mauris, quis ultrices purus. incidunt ante ac mi luctus bibendum. Duis vitae sem pretium, aliquam est eget, imperdiet dolor. Curabitur eget augue nec tellus faucibus facilisis tristique sed lectus. Maecenas ac odio ac nisl iaculis aliquam. Nullam mattis finibus ipsum, finibus semper mauris posuere nec. Phasellus vehicula tempor mi, eget commodo magna eleifend vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec vitae eleifend mauris, eu posuere nulla. Praesent a ultrices mauris, quis ultrices purus. incidunt ante ac mi luctus bibendum. Duis vitae sem pretium, aliquam est eget, imperdiet dolor. Curabitur eget augue nec tellus faucibus facilisis tristique sed lectus. Maecenas ac odio ac nisl iaculis aliquam. Nullam mattis finibus ipsum, finibus semper mauris posuere nec. Phasellus vehicula tempor mi, eget commodo magna eleifend vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec vitae eleifend mauris, eu posuere nulla. Praesent a ultrices mauris, quis ultrices purus.</span></p>";

	const bodyHtml = (
		<div
			style={{
				height       : "850px",
				width        : "100%",
				padding      : "15%",
				paddingLeft  : "25%",
				paddingRight : "25%",
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
					width         : "100%",
					display       : "flex",
					flexDirection : "column",
					gap           : "30px",
				}}>
					<div
						style={{
							width         : "100%",
							display       : "flex",
							flexDirection : "column",
							alignItems    : "flex-start",
							gap           : "2px",
						}}
					>
						<div
							style={{
								lineHeight    : "1.4px",
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
						<DividerLayoutPdf w="10%" />
					</div>
					<div
						style={{
							width      : "100%",
							lineHeight : "1px",
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

export default Mod23Pdf;
