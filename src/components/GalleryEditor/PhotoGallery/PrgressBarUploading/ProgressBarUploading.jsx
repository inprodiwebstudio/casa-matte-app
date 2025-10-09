import { Progress, Stack, Text } from "@mantine/core";


const ProgressBarUploading = () => {
	return (
		<Stack
			w="100%"
			spacing={"2px"}
		>
			<Progress
				color="blue"
				value={75}
				size="sm"
				radius="xl"
				animate
			/>
			<Text
				size="10px"
				color="black"
				weight={500}
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
					color         : "black",
				}}
			>
				Cargando fotos : 75%
			</Text>
		</Stack>
	);
};

export default ProgressBarUploading;
