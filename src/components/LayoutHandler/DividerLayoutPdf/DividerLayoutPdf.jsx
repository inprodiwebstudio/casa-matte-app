
const DividerLayoutPdf = ({w, h}) => {
	return (
		<div
			style={{
				height     : h ?? "1px",
				background : "black",
				width      : w ?? "100%",
			}}
		>
           &nbsp;
		</div>
	);
};

export default DividerLayoutPdf;
