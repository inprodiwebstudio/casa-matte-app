import { Box, Group, Stack }                      from "@mantine/core";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import frontThemesTextures                        from "core/constants/frontThemesColors";
import { workSpaceSlice }                         from "store/Slices";

const ColorPickerCover = () => {
	const coverData = useSelector((state) => state.workSpaceSlice.data.cover, shallowEqual);

	const colors = Object.keys(frontThemesTextures[coverData?.material]);

	const handlerSecondColors = (coverData?.material === "BRIGHT") ? "NUDE" : "BRIGHT";

	const listSecondColors = Object.keys(frontThemesTextures[handlerSecondColors]);

	const dispatch = useDispatch();

	return (
		<Stack
			spacing={0}
			mt="10px"
		>
			<label>
				{coverData?.material ?? ""}
			</label>
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
							onClick={() => dispatch(workSpaceSlice.actions.changeColorCover({
								material : coverData?.material,
								color    : color,
							}))}
						>
						&nbsp;
						</Box>
					))
				}
			</Group>
			{
				((coverData?.material === "BRIGHT") || (coverData?.material === "NUDE")) && (
					<div
						style={{
							marginTop : "5px",
						}}
					>

						<label>
							{handlerSecondColors}
						</label>
						<Group
							mt="10px"
							spacing="8px"
						>
							{
								listSecondColors.map((color, index) => (
									<Box
										key={index}
										style={{
											background   : frontThemesTextures[handlerSecondColors][color]?.color,
											borderRadius : "50%",
											cursor       : "pointer",
											border       : (color === coverData?.color) && "2px solid black",
										}}
										w="20px"
										h="20px"
										onClick={() => dispatch(workSpaceSlice.actions.changeColorCover(
											{
												material : handlerSecondColors,
												color    : color,
											}
										))}
									>
										&nbsp;
									</Box>
								))
							}
						</Group>
					</div>
				)
			}
		</Stack>
	);
};

export default ColorPickerCover;
