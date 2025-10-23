// eslint-disable-next-line import/no-extraneous-dependencies
import { Rnd }                           from "react-rnd";
import DividerLayout                     from "components/LayoutHandler/DividerLayout";
import { useContext }                    from "react";
import { currentConfigPhotoBookContext } from "contexts/configContext";


const LineDecorationDrag = ({
	orientation = "h",
	long = "100%",
	weight = "2px",
	layoutNo,
	sheetNo,
}) => {
	const {currentConfigPhotoBook, setCurrentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);

	const currentPositionLine = currentConfigPhotoBook?.[`sheet${sheetNo}`]?.linesDecoration?.[layoutNo]?.position ?? {
		x : 0,
		y : 0,
	};
	const handlerSetPosition = (d) => {
		setCurrentConfigPhotoBook(prev => ({
			...prev,
			[`sheet${sheetNo}`] : {
				...prev?.[`sheet${sheetNo}`],
				linesDecoration : {
					...prev?.[`sheet${sheetNo}`]?.linesDecoration,
					[layoutNo] : {
						...prev?.[`sheet${sheetNo}`]?.linesDecoration?.[layoutNo],
						position : {
							x : d.x,
							y : d.y,
						},
					},
				},
			},
		}));
	};

	return (
		<Rnd
			enableResizing={false}
			position={currentPositionLine}
			bounds={`#draggable-zone-sheet${sheetNo}`}
			size={{
				width  : long,
				height : "40px",
			}}
			style={{
				display        : "flex",
				justifyContent : "center",
				alignItems     : "center",
			}}
			scale={0.75}
			onDragStop={(e, d) => {
				handlerSetPosition(d);
			}}
		>
			<DividerLayout
				long={long}
				position={orientation}
				weight={weight}
			/>
		</Rnd>
	);
};

export default LineDecorationDrag;
