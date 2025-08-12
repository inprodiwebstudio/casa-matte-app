import { Button }                    from "core/components";
import { useSelector, shallowEqual } from "react-redux";
import { closeAllModals }            from "@mantine/modals";
import { Center }                    from "@mantine/core";
import React                         from "react";
import "./QrGeneratorPhotos.scss";
import QRCode from "react-qr-code";

const QrGeneratorPhotos = () => {

    const authorId = useSelector((state) => state.authSlice?.user?.username, shallowEqual);
    const postId = useSelector((state) => state.workSpaceSlice?.data?.postTypeId, shallowEqual);

    const linkValueQr = `http://192.168.100.129:5173/uploadImages/${authorId}/${postId}` ;

    return (
        <div className="body-confirmation-modal">
            <div className="tittle-confirmation">Agregar fotos desde tu móvil</div>
            <div className="text-description">
                Escanea el código QR para agregar las fotos desde tu dispositivo dispositivo móvil.
            </div>
            <Center
                sx={{
                    marginTop: "3%",
                    marginBottom: "3%"
                }}
            >
                <QRCode value={linkValueQr} size={200} />
            </Center>
            <div className="buttons-container">
               <Center>
                    <Button
                        fontSize="18px"
                        width={117}
                        height={39}
                        onClick={() => closeAllModals()}
                    >
                        Cerrar
                    </Button>
               </Center>
            </div>
        </div>
    );
};

export default QrGeneratorPhotos;
