import { useSelector, shallowEqual }                from "react-redux";
import { Center, CloseButton, Stack, Text, Button } from "@mantine/core";
import React                                        from "react";
import "./QrGeneratorPhotos.scss";
import QRCode                                       from "react-qr-code";
import { closeAllModals }                           from "@mantine/modals";

const QrGeneratorPhotos = () => {

	const authorId = useSelector((state) => state.authSlice?.user?.username, shallowEqual);
	const postId = useSelector((state) => state.workSpaceSlice?.data?.postTypeId, shallowEqual);

	const linkValueQr = `http://192.168.68.112:5173/uploadImages/${authorId}/${postId}` ;

	const handlerRefresh = () => {
		window.location.reload();
	};

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
					Agregar Fotos a Galería Sin Titulo.
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
				w="45%"
			>
				Escanea el código QR
				para subir fotos desde tu celular.
			</Text>
			<Center>
				<QRCode value={linkValueQr} size={200} />
			</Center>
			<Text
				size="12px"
				align="center"
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
					color         : "#58595b",
				}}
				w="80%"
			>
				Sigue las instrucciones desde tu celular.
				Cuando terminen de subirse las fotos, haz
				click en DONE para ver las fotos en tu galería.
			</Text>
			<div className="buttons-container">
				<Center>
					<Button
						radius="md"
						size="xs"
						color="darkCasaMatte"
						w="140px"
						h="27px"
						onClick={handlerRefresh}
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

export default QrGeneratorPhotos;
