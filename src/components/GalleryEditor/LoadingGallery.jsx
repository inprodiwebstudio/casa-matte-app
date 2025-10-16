import { Center, Stack, Text } from "@mantine/core";
import { PuffLoader }          from "react-spinners";


const LoadingGallery = () => {
	return (
		<Stack
			w="100%"
			h="100%"
		>
			<Center
				h="100%"
			>
				<Stack
					align="center"
				>
					<PuffLoader
						size={40}
					/>
					<Stack
						spacing={3}
						align="center"
					>
						<Text
							size="18px"
							color="gray"
							weight={500}
							align="center"
							style={{
								fontFamily    : "Helvetica",
								letterSpacing : "0px",
							}}
						>
							Cargando galería
						</Text>
						<Text
							size="10px"
							color="gray"
							weight={500}
							align="center"
							style={{
								fontFamily    : "Helvetica",
								letterSpacing : "0px",
								lineHeight    : "10px",
							}}
						>
							Esto puede tardar unos segundos.
						</Text>
					</Stack>
				</Stack>
			</Center>
		</Stack>
	);
};

export default LoadingGallery;
