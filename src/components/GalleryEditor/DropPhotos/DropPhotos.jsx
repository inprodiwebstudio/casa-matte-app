import { Button, CloseButton, Stack, Text } from "@mantine/core";
import { HiOutlineDevicePhoneMobile }       from "react-icons/hi2";
import { IoIosLaptop }                      from "react-icons/io";
import { MdOutlinePhotoLibrary }            from "react-icons/md";
import { useState }                         from "react";


//Redux
import { useDispatch }  from "react-redux";
import { gallerySlice } from "store/Slices";


//Own components
import CardButton from "./CardButton";

const DropPhotos = () => {
	const [typeActiveCard, setTypeActiveCard] = useState(null);

	const dispatch = useDispatch();

	const onClickClose = () => {
		dispatch(gallerySlice.actions.setTypeDropedView(null));
	};


	return (
		<Stack
			style={{
				flex            : 1,
				backgroundColor : "#edeeee",
				borderRadius    : "30px",
				position        : "relative",
			}}
			pt="30px"
			pb="30px"
			p="50px"
			align="center"
			spacing="40px"
		>
			 <CloseButton
				radius={"50%"}
				color="darkCasaMatte"
				variant="filled"
				size="sm"
				style={{
					position : "absolute",
					top      : "-8px",
					right    : "-1px",
				}}
				onClick={onClickClose}
			/>
			<Text
				size="10px"
				weight={500}
				w="150px"
				align="center"
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
					color         : "#58595b",
					lineHeight    : "12px",
				}}
			>
				Arrastra y suelta tus fotos aquí ó agregalas desde tu:
			</Text>
			<Stack
				w="100%"
				align="center"
				spacing="30px"
			>
				<CardButton
					action={() => setTypeActiveCard("phone")}
					label="Celular"
					icon={<HiOutlineDevicePhoneMobile size={30} />}
					isActive={typeActiveCard === "phone"}
				/>
				<CardButton
					action={() => setTypeActiveCard("computer")}
					label="Computadora"
					icon={<IoIosLaptop size={30} />}
					isActive={typeActiveCard === "computer"}
				/>
				<CardButton
					action={() => setTypeActiveCard("gallery")}
					label="Mis Galerías"
					icon={<MdOutlinePhotoLibrary size={30} />}
					isActive={typeActiveCard === "gallery"}
				/>
			</Stack>
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
				>
					Done
				</Text>
			</Button>
		</Stack>
	);
};

export default DropPhotos;
