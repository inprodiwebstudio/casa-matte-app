import { Button, Center, CloseButton, Group, Stack, Text } from "@mantine/core";
import { closeAllModals }                                  from "@mantine/modals";

import "./ModalBody.scss";

const ModalBody = ({children, textHeader, onClose, onSubmit}) => {
	return (
		<div className="modalBody">
			<Stack
				style={{
					background   : "#edeeee",
					borderRadius : "20px",
					position     : "absolute",
					top          : "-20px",
					left         : "-20px",
					width        : "50vw",
					padding      : "15px",
				}}
			>
				<CloseButton
					radius={"50%"}
					color="darkCasaMatte"
					variant="filled"
					size="sm"
					style={{
						position : "absolute",
						left     : "95%",
						right    : "0px",
					}}
					onClick={() => closeAllModals()}
				/>
				<Text
					size="15px"
					align="center"
					style={{
						fontFamily    : "Helvetica",
						letterSpacing : "0px",
						color         : "#58595b",
					}}
				>
					{textHeader ?? ""}
				</Text>
			</Stack>
			{children}
			<div className="buttonsContainer">
				<Center>
					<Group spacing={80}>
						<Button
							radius="md"
							size="xs"
							color="darkCasaMatte"
							w="140px"
							h="27px"
							onClick={onSubmit}
						>
							<Text
								size="13px"
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
								Terminar
							</Text>
						</Button>
						<Button
							color="darkCasaMatte.2"
							radius="md"
							size="xs"
							w="140px"
							h="27px"
							onClick={onClose}
						>
							<Text
								size="13px"
								weight={500}
								color="lightCasaMatte"
								w="150px"
								align="center"
								style={{
									fontFamily    : "Helvetica",
									letterSpacing : "0px",
									lineHeight    : "12px",
								}}
							>
								Cancelar
							</Text>
						</Button>
					</Group>
				</Center>
			</div>
		</div>
	);
};

export default ModalBody;
