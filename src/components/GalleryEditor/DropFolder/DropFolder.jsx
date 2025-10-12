import { Button, Card, Center, Input, Stack, Text } from "@mantine/core";
import { GoPlus }                                   from "react-icons/go";
import { useDropzone }                              from "react-dropzone/.";
import { showNotification }                         from "@mantine/notifications";
import FillCircle                                   from "../CradAction/FillCircle";

import { useState } from "react";

//Slices
import { useDispatch }  from "react-redux";
import { gallerySlice } from "store/Slices";

const DropFolder = () => {
	const dispatch = useDispatch();

	const [folderName, setFolderName] = useState(undefined);
	const [photosFiles, setPhotosFiles] = useState([]);
	const [errorFolderName, setErrorFolderName] = useState(false);

	const onChangeFolderName = (e) => {
		if (errorFolderName) setErrorFolderName(false);
		setFolderName(e.target.value);
	};

	const handlerSubmit = () => {
		if (!folderName) {
			setErrorFolderName(true);
			showNotification({
				title   : "No hay nombre de carpeta",
				message : "El nombre de la carpeta es obligatorio.",
				color   : "red",
				styles  : () => ({
					root : {
											  "&::before" : {
												  borderRadius : "0px",
												  width        : "3px",
											  },
											  borderRadius : "0px",
					},

					title       : { fontFamily : "Helvetica", fontWeight : "500", textTransform : "uppercase" },
					description : { fontFamily : "Helvetica" },
				}),
			});
			return;
		}
		dispatch(gallerySlice.actions.setFolderName(folderName));
		dispatch(gallerySlice.actions.setFilesDrop(photosFiles));
		dispatch(gallerySlice.actions.setTypeDropedView(null));
	};

	const { getInputProps, getRootProps } = useDropzone({
		multiple : true,
		onDrop   : (files) => setPhotosFiles(files),
		accept   : {
			"image/*" : [],
		},
	});

	return (
		<Stack
			w="100%"
			h="100%"
			align="center"
			justify="center"
			spacing="30px"
			mb="30px"
		>
			<Card
				withBorder
				w="100%"
				radius="15px"
				p={15}
				pl={25}
				pr={25}
				style={{
					background : "#f6f6f6",
					flex       : 1,
				}}
			>
				<Stack
					w="100%"
					h="100%"
				>
					<Input
						value={folderName}
						onChange={onChangeFolderName}
						variant="unstyled"
						placeholder="CARPETA SIN TÍTULO"
						styles={{
							input : {
								fontWeight      : 600,
								fontSize        : "15px",
								color           : "#1e293b",
								"::placeholder" : {
									color : errorFolderName ? "red" : "black",
								},
							},
						}}
					/>
					<Center
						style={{
							flex : 1,
						}}
						{...getRootProps()}
					>
						<Card
							style={{
								background : "#e2e3e4",
								cursor     : "pointer",
								userSelect : "none",
							}}
							radius={"10px"}
							w="120px"
						>
							<Center
								style={{
									flexDirection : "column",
									gap           : "5px",
								}}
							>
								<FillCircle>
									<GoPlus size={13} />
								</FillCircle>
								<Text
									size="10px"
									color="black"
									weight={500}
									align="center"
									style={{
										fontFamily    : "Helvetica",
										letterSpacing : "0px",
										color         : "black",
									}}
								>
									Agregar fotos
								</Text>
							</Center>
						</Card>
						<input {...getInputProps()} />
					</Center>
				</Stack>
			</Card>
			<Button
				radius="md"
				size="xs"
				color="darkCasaMatte"
				w="130px"
				h="23px"
			>
				<Text
					size="10px"
					weight={500}
					w="150px"
					color="lightCasaMatte"
					align="center"
					style={{
						fontFamily    : "Helvetica",
						letterSpacing : "0px",
						lineHeight    : "12px",
					}}
					onClick={() => handlerSubmit()}
				>
					Done
				</Text>
			</Button>
		</Stack>
	);
};

export default DropFolder;
