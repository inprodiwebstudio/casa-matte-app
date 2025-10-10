import { Button, Card, Center, Input, Stack, Text } from "@mantine/core";
import { GoPlus }                                   from "react-icons/go";
import FillCircle                                   from "../CradAction/FillCircle";

const DropFolder = () => {
	return (
		<Stack
			w="100%"
			h="100%"
			align="center"
			justify="center"
			spacing="30px"
			mb="30px"
		>
			<Card
				withBorder
				w="100%"
				radius="15px"
				p={15}
				pl={25}
				pr={25}
				style={{
					background : "#f6f6f6",
					flex       : 1,
				}}
			>
				<Stack
					w="100%"
					h="100%"
				>
					<Input
						value={"TÍTULO CARPETA"}
						variant="unstyled"
						styles={{
							input : {
								fontWeight : 600,
								fontSize   : "15px",
								color      : "#1e293b",
							},
						}}
					/>
					<Center
						style={{
							flex : 1,
						}}
					>
						<Card
							style={{
								background : "#e2e3e4",
								cursor     : "pointer",
								userSelect : "none",
							}}
							radius={"10px"}
							w="120px"
						>
							<Center
								style={{
									flexDirection : "column",
									gap           : "5px",
								}}
							>
								<FillCircle>
									<GoPlus size={13} />
								</FillCircle>
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
									Agregar fotos
								</Text>
							</Center>
						</Card>
					</Center>
				</Stack>
			</Card>
			<Button
				radius="md"
				size="xs"
				color="darkCasaMatte"
				w="130px"
				h="23px"
			>
				<Text
					size="10px"
					weight={500}
					w="150px"
					color="lightCasaMatte"
					align="center"
					style={{
						fontFamily    : "Helvetica",
						letterSpacing : "0px",
						lineHeight    : "12px",
					}}
				>
					Done
				</Text>
			</Button>
		</Stack>
	);
};

export default DropFolder;
