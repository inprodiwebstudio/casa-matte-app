import { Center, CloseButton, Stack, Text, Button } from "@mantine/core";
import React                                        from "react";
import "./ConfirmationDeletePhoto";
import { closeAllModals }                           from "@mantine/modals";

const ConfirmationDeletePhoto = () => {
	const onCloseButton = () => {
		closeAllModals();
	};

	return (
		<div className="body-confirmation-modal">
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
					onClick={onCloseButton}
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
					¿Estás seguro?
				</Text>
			</Stack>
			<Text
				size="15px"
				align="center"
				weight="bolder"
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
				}}
				w="90%"
			>
				Estás por eliminar permanentemente la fotografía de tu galería, se borrará de cualquier parte donde haya sido utilizada.
			</Text>
			<div className="buttons-container">
				<Center>
					<Button
						radius="md"
						size="xs"
						color="darkCasaMatte"
						w="140px"
						h="27px"
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
							Aceptar
						</Text>
					</Button>
				</Center>
			</div>
		</div>
	);
};

export default ConfirmationDeletePhoto;
