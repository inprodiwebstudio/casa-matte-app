import { useSelector, shallowEqual } from "react-redux";
import { Center, Text }              from "@mantine/core";
import React                         from "react";
import ModalBody                     from "components/global/ModalBody";
import QRCode                        from "react-qr-code";
import { closeAllModals }            from "@mantine/modals";

const QrGeneratorPhotos = () => {

	const authorId = useSelector((state) => state.authSlice?.user?.username, shallowEqual);
	const postId = useSelector((state) => state.workSpaceSlice?.data?.postTypeId, shallowEqual);

	const linkValueQr = `https://app.casamatte.com/uploadImages/${authorId}/${postId}` ;

	const handlerRefresh = () => {
		window.location.reload();
	};

	const onCloseButton = () => {
		closeAllModals();
	};

	return (
		<ModalBody
			onClose={onCloseButton}
			onSubmit={handlerRefresh}
			textHeader="Subir fotos desde tu dispositivo móvil"
		>
			<Text
				size="15px"
				align="center"
				weight="bolder"
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
				}}
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
		</ModalBody>
	);
};

export default QrGeneratorPhotos;
