import { Card, Center, Stack, Text } from "@mantine/core";
import FillCircle                    from "./FillCircle";
import { shallowEqual, useSelector } from "react-redux";

const CardAction = ({
	label,
	icon,
	fillIcon = true,
	zoomContent = 1,
	onClick,
	...res
}) => {
	const isLoadingMutation = useSelector((state) => state.gallerySlice.isLoadingMutation, shallowEqual);

	const isFilledIcon = icon && fillIcon;

	return (
		<Card
			{...res}
			onClick={!isLoadingMutation && onClick}
			style={{
				borderColor : "#e6e6e7",
				background  : "#f6f6f6",
				cursor      : "pointer",
				userSelect  : "none",
			}}
			radius={"8px"}
			p="0px"
			opacity={isLoadingMutation ? 0.3 : 1}
		>
			<Center
				h="100%"
				style={{
					zoom : zoomContent,
				}}
			>
				<Stack
					align="center"
					spacing={"5px"}
				>
					{
						(icon && !isFilledIcon) && icon
					}
					{
						isFilledIcon && <FillCircle>{icon}</FillCircle>
					}
					<Text
						size="10px"
						color="black"
						weight={500}
						align="center"
						style={{
							fontFamily    : "Helvetica",
							letterSpacing : "0px",
							color         : "black",
						}}
					>
						{label ?? ""}
					</Text>
				</Stack>
			</Center>
		</Card>
	);
};

export default CardAction;
