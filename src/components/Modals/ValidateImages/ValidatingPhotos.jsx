import { Stack, Text, useMantineTheme } from "@mantine/core";
import { ClipLoader }                   from "react-spinners";

const ValidatingPhotos = () => {
	const theme = useMantineTheme();
	return (
		<Stack
			align="center"
			justify="center"
			spacing="15px"
			mt="20px"
		>
			<ClipLoader
				color={theme.colors.darkCasaMatte[3]}
				size={30}
			/>
			<Stack
				spacing={0}
			>
				<Text
					size="14px"
					align="center"
				>
					Validando tus fotos
				</Text>
				<Text
					size="12px"
					align="center"
					color="gray"
				>
					Esto puede tardar unos minutos. Por favor, no cierre la ventana.
				</Text>
			</Stack>
		</Stack>
	);
};

export default ValidatingPhotos;
