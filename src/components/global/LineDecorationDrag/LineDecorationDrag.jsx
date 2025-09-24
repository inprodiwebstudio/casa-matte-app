import DividerLayout from "components/LayoutHandler/DividerLayout";
import Rnd           from "react-rnd";


const LineDecorationDrag = ({
	orientation = "h",
	long = "100%",
	weight = "2px",
	position = {
		x : 0,
		y : 0,
	},
	sheetNo,
}) => {
	return (
		<Rnd
			position={position}
			bounds={`#draggable-zone-sheet${sheetNo}`}
			scale={0.43}
			// onDragStop={(e, d) => {
			// 	handlerSetPosition(d);
			// }}
		>
			<DividerLayout
				long={orientation}
				position={long}
				weight={weight}
			/>
		</Rnd>
	);
};

export default LineDecorationDrag;
