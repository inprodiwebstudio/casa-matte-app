import { Card, Center, Stack, Text } from "@mantine/core";

const CardButton = ({
	action,
	icon,
	label,
	isActive = false,
	stopPropagation = false,
	disabled = false,
}) => {
	const handlerAction = (e) => {
		if (stopPropagation) e.stopPropagation();
		action();
	};
	return (
		<Card
			shadow="sm"
			w="110px"
			h="90px"
			radius="8px"
			style={{
				cursor     : "pointer",
				userSelect : "none",
				background : isActive && "#58595b",
				color      : isActive && "white",
				transition : "all ease 200ms",
				opacity    : disabled ? 0.5 : 1,
			}}
			onClick={handlerAction}
			p={0}
		>
			<Center
				h="100%"
			>
				<Stack
					align="center"
					spacing={6}
				>
					{icon}
					<Text
						size="8px"
						color={isActive ? "white" : "dark"}
						weight={500}
						align="center"
						style={{
							fontFamily    : "Helvetica",
							letterSpacing : "0px",
							transition    : "all ease 200ms",
						}}
					>
						{label}
					</Text>
				</Stack>
			</Center>
		</Card>
	);
};

export default CardButton;
