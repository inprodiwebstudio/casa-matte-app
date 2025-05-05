import { Box, Group }                             from "@mantine/core";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import frontThemesTextures                        from "core/constants/frontThemesColors";
import { workSpaceSlice }                         from "store/Slices";

const ColorPickerCover = () => {
	const coverData = useSelector((state) => state.workSpaceSlice.data.cover, shallowEqual);

	const colors = Object.keys(frontThemesTextures[coverData?.material]);

	const dispatch = useDispatch();

	return (
		<Group
			mt="10px"
			spacing="8px"
		>
			{
				colors.map((color, index) => (
					<Box
						key={index}
						style={{
							background   : frontThemesTextures[coverData?.material][color]?.color,
							borderRadius : "50%",
							cursor       : "pointer",
							border       : (color === coverData?.color) && "2px solid black",
						}}
						w="20px"
						h="20px"
						onClick={() => dispatch(workSpaceSlice.actions.changeColorCover(color))}
					>
						&nbsp;
					</Box>
				))
			}
		</Group>
	);
};

export default ColorPickerCover;
