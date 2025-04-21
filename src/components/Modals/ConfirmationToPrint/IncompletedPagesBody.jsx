import { Group, Stack, Text } from "@mantine/core";

const IncompletedPagesBody = ({pages}) => {
	return (
		<div className="body-confirmation-modal">
			<div className="tittle-confirmation">No has completado tu photobook</div>
			<Stack>
				<div className="text-description" style={{ textAlign : "center" }}>
					Los siguientes paginas están incompletas :
				</div>
				<Group position="center" w="100%">
					{
						pages.map((page, index) => {
							return <Text
								size="15px"
								weight={500}
								key={index}
								style={{ textTransform : "uppercase" }}
							>
								Pagina {page}
							</Text>;
						})
					}
				</Group>
				<div className="text-description" style={{ textAlign : "center" }}>
					debes completarlas antes de enviarlo.
				</div>
			</Stack>
		</div>
	);
};

export default IncompletedPagesBody;
