import { Group, Stack, Text } from "@mantine/core";

const ErrorPhotosDisplay = ({pagesImgsRemoved}) => {
	const handlerPhotoTextQuantity = pagesImgsRemoved.length > 1 ? "fotos" : "foto";
	return (
		<Stack
			justify="center"
			align="center"
			spacing={"3px"}
		>
			<Text
				size="18px"
			>
				Se detectaron y eliminaron {pagesImgsRemoved.length} {handlerPhotoTextQuantity} con problemas.
			</Text>
			<Stack
				align="center"
				justify="center"
				maw="500px"
			>
				<Text
					size="15px"
					color="gray"
				>
					Estas son las páginas:
				</Text>
				<Group position="center" w="100%">
					{
						pagesImgsRemoved.map((page, index) => {
							return (
								<Text
									key={index}
									size="15px"
									weight={500}
								>
									Pagina {page}
								</Text>
							);
						})
					}
				</Group>
			</Stack>
		</Stack>
	);
};

export default ErrorPhotosDisplay;
