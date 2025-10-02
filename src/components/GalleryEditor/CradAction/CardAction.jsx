import { Card, Center, Stack, Text } from "@mantine/core";
import FillCircle                    from "./FillCircle";

const CardAction = ({
	label,
	icon,
	fillIcon = true,
	zoomContent = 1,
	...res
}) => {

	const isFilledIcon = icon && fillIcon;

	return (
		<Card
			{...res}
			style={{
				borderColor : "#e6e6e7",
				background  : "#f6f6f6",
				cursor      : "pointer",
				userSelect  : "none",
			}}
			radius={"8px"}
			p="0px"
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
