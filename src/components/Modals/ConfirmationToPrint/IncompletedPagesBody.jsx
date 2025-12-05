import { Group, Stack, Text } from "@mantine/core";
import { closeAllModals }     from "@mantine/modals";
import ModalBody              from "components/global/ModalBody";

const IncompletedPagesBody = ({pages}) => {
	return (
		<ModalBody
			onSubmit={() => closeAllModals()}
			onClose={() => closeAllModals()}
			textHeader="No has completado tu photobook"
		>
			<div
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
					textAlign     : "center",
				}}
			>
				No has completado tu photobook
			</div>
			<Stack>
				<div
					style={{
						fontFamily    : "Helvetica",
						letterSpacing : "0px",
						textAlign     : "center",
					}}
				>
					Los siguientes paginas están incompletas :
				</div>
				<Group position="center" w="100%">
					{
						pages.map((page, index) => {
							return <Text
								size="15px"
								weight={500}
								key={index}
								style={{ textTransform : "uppercase", fontFamily : "Helvetica" }}
							>
								Pagina {page}
							</Text>;
						})
					}
				</Group>
				<div className="text-description" style={{ textAlign : "center", fontFamily : "Helvetica" }}>
					debes completarlas antes de enviarlo.
				</div>
			</Stack>
		</ModalBody>
	);
};

export default IncompletedPagesBody;
