import { useState } from "react";
import {
	Card,
	Stack,
	Divider,
	Text,
	Group,
	Button,
	Progress,
} from "@mantine/core";


import {
	GENERATION_STATUS_MESSAGES,
} from "./cardSearchPhotoBook.constants";
// eslint-disable-next-line import/no-extraneous-dependencies
import { SaveIcom } from "Resources/icons";

const PhotoBookDownload = ({ photoBookData, onReturn }) => {
	// Estados
	const [isLoading, setIsLoading] = useState(false);
	const [progress, setProgress] = useState(0);
	const [generationStatus, setGenerationStatus] = useState("idle");

	const StatusCard = () => (
		<Card
			style={{
				position        : "fixed",
				top             : "20px",
				right           : "20px",
				zIndex          : 1000,
				backgroundColor : "#fff",
				padding         : "15px",
				boxShadow       : "0 0 10px rgba(0,0,0,0.2)",
				minWidth        : "300px",
			}}
		>
			<Text weight={600} mb="sm">
				{GENERATION_STATUS_MESSAGES[generationStatus] || "Procesando..."}
			</Text>
			<Progress value={progress} mb="xs" />
			<Text size="sm" color="dimmed">
				Progreso: {progress}%
			</Text>
			{generationStatus === "error" && (
				<Text size="sm" color="red" mt="sm">
					Ocurrió un error. Por favor intenta nuevamente.
				</Text>
			)}
		</Card>
	);

	return (
		<Stack w="100%" h="100%" align="center" justify="center" style={{ position : "relative" }}>
			<OrderInfoCard
				photoBookData={photoBookData}
				isLoading={isLoading}
				generationStatus={generationStatus}
				onDownload={() => console.log("Download")}
				onReturn={onReturn}
			/>

			{generationStatus !== "idle" && <StatusCard />}
		</Stack>
	);
};

const OrderInfoCard = ({ photoBookData, isLoading, generationStatus, onDownload, onReturn }) => (
	<Card
		radius="13px"
		shadow="lg"
		w="40%"
		p="30px"
		mih="380px"
		pt="35px"
		style={{ backgroundColor : "#F7F5F1", position : "absolute" }}
		withBorder
	>
		<Stack>
			<OrderSection
				title="DATOS DEL PEDIDO"
				items={[
					{ label : "NO DE PEDIDO", value : `#${photoBookData?.id_del_pedido ?? "--"}` },
					{ label : "ID PHOTOBOOK", value : photoBookData?.id ?? "--" },
					{ label : "CORREO DEL AUTOR", value : photoBookData?.correo_del_autor ?? "--" },
				]}
			/>

			<Divider size="sm" variant="dashed" />

			<OrderSection
				title="INFORMACIÓN DEL PHOTOBOOK"
				items={[
					{ label : "MODELO", value : photoBookData?.modelo ?? "--" },
					{ label : "TAMAÑO", value : photoBookData?.tamano ?? "--" },
				]}
			/>

			<ActionButtons
				isLoading={isLoading}
				generationStatus={generationStatus}
				onDownload={onDownload}
				onReturn={onReturn}
			/>
		</Stack>
	</Card>
);

const OrderSection = ({ title, items }) => (
	<Stack spacing={3}>
		<Text style={{ letterSpacing : "4px" }}>{title}</Text>
		<Group spacing={30}>
			{items.map((item, index) => (
				<Stack key={index} spacing={3}>
					<Text color="gray" size="13px" weight={400}>{item.label}</Text>
					<Text weight={400} size="14px">{item.value}</Text>
				</Stack>
			))}
		</Group>
	</Stack>
);

const ActionButtons = ({ isLoading, generationStatus, onDownload, onReturn }) => (
	<Stack spacing="0px">
		<Button
			color="darkCasaMatte.7"
			size="xs"
			mt="20px"
			sx={{ fontWeight : "200" }}
			loading={isLoading}
			onClick={onDownload}
			rightIcon={<SaveIcom size="12px" />}
			disabled={generationStatus === "generating"}
			fullWidth
		>
			DESCARGAR
		</Button>
		<Button
			color="darkCasaMatte.6"
			size="xs"
			mt="20px"
			sx={{ fontWeight : "200" }}
			onClick={onReturn}
			loading={isLoading}
			disabled={generationStatus === "generating"}
			fullWidth
		>
			REGRESAR
		</Button>
	</Stack>
);

export default PhotoBookDownload;
