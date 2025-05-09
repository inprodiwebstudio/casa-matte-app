import { Group }                                  from "@mantine/core";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import engravingColors                            from "core/constants/engravingColors";
import { workSpaceSlice }                         from "store/Slices";


const ColorPickerEngraving = () => {
	const colorsEngraving = useSelector((state) => state.workSpaceSlice.data.engraving.listOfColors, shallowEqual);
	const currentColorDataEngraving = useSelector((state) => state.workSpaceSlice.data.engraving.currentColor, shallowEqual);

	const dispatch = useDispatch();

	return (
		<Group
			mt="10px"
			spacing="8px"
		>
			{
				colorsEngraving.map((color, index) => (
					<div
						key={index}
						style={{
							backgroundImage : `url(${engravingColors[color].texture})`,
							backgroundSize  : "cover",
							borderRadius    : "50%",
							height          : "20px",
							width           : "20px",
							cursor          : "pointer",
							border          : (color === currentColorDataEngraving?.name) && "2px solid black",
						}}

						onClick={() => dispatch(workSpaceSlice.actions.changeColorEngraving({
							name     : color,
							colorHex : engravingColors[color].color,
						}))}
					>
                        &nbsp;
					</div>
				))
			}
		</Group>
	);
};

export default ColorPickerEngraving;
