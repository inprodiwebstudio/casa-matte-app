import { Center, Stack, Text, useMantineTheme } from "@mantine/core";
import { closeAllModals }                       from "@mantine/modals";
import ModalBody                                from "components/global/ModalBody";
import { ClipLoader }                           from "react-spinners";

const BodyConfirm = ({
	onSubmit,
	isLoading,
	validatedImages,
	loadingValidateImgs,
}) => {
	const theme = useMantineTheme();
	return (
		<ModalBody
			onSubmit={onSubmit}
			onClose={() => closeAllModals()}
			isLoading={loadingValidateImgs || isLoading}
			textHeader="Enviar para impresión"
		>
			{
				(!loadingValidateImgs && !isLoading && !validatedImages) && (
					<div
						style={{
							fontFamily    : "Helvetica",
							letterSpacing : "0px",
						}}
					>
						¿Estás seguro?
					</div>
				)
			}
			<div
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
					textAlign     : "center",
				}}
			>
				{
					(!loadingValidateImgs && !isLoading && !validatedImages) && "Estás a punto de enviar tu photobook para impresión. Una vez que confirmes, no podrás seguir editándolo ni deshacer esta acción. Tu pedido quedará confirmado. ¿Deseas continuar?"
				}
				{
					loadingValidateImgs && (
						<Center>
							<Stack spacing={7}>
								<Text>Validando integridad de las fotografías...</Text>
								<Text
									size="12px"
									color="Gray"
								>
									Estamos validando las fotografías insertadas en los layouts para asegurar una correcta impresión. Si se detecta algún problema, se te pedirá volver a insertar las imágenes en las paginas detectadas.
								</Text>
								<Text color="gray.6" size="13px" mt="8px">(esto puede tardar unos minutos)</Text>
							</Stack>
						</Center>
					)
				}
				{
					(validatedImages && !isLoading) && (
						<Center>
							<Stack spacing={7} align="center" justify="center">
								<ClipLoader
									color={theme.colors.darkCasaMatte[3]}
									size={30}
								/>
								<Text
									size="12px"
									color="Gray"
								>
									Comprobando proyecto...
								</Text>
							</Stack>
						</Center>
					)
				}
				{
					isLoading && (
						<Text
							size="12px"
							color="Gray"
						>
							Enviando photobook a impresión...
						</Text>
					)
				}
			</div>
		</ModalBody>
	);
};

export default BodyConfirm;
