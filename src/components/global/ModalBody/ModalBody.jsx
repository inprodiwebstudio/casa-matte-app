import { Button, Center, CloseButton, Stack, Text } from "@mantine/core";
import { closeAllModals }                           from "@mantine/modals";

import "./ModalBody.scss";

const ModalBody = ({children, onClose, onSubmit}) => {
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
					Agregar Fotos a Galería Sin Titulo.
				</Text>
			</Stack>
			{children}
			<div className="buttonsContainer">
				<Center>
					<Button
						radius="md"
						size="xs"
						color="darkCasaMatte"
						w="140px"
						h="27px"
						onClick={() => closeAllModals()}
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
							Done
						</Text>
					</Button>
				</Center>
			</div>
		</div>
	);
};

export default ModalBody;
