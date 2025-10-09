import { Group }           from "@mantine/core";
import React               from "react";
import CardAction          from "../CradAction";
import { GoPlus }          from "react-icons/go";
import { FaRegFolderOpen } from "react-icons/fa";
import { BsStars }         from "react-icons/bs";

//Slices
import { gallerySlice } from "store/Slices";

//Redux
import { useDispatch } from "react-redux";

const ActionsGroup = ({...rest}) => {
	const dispatch = useDispatch();

	const onClickAddPhotos = () => {
		dispatch(gallerySlice.actions.setTypeDropedView("photos"));
	};

	return (
		<Group
			{...rest}
			align="flex-start"
		>
			<CardAction
				withBorder
				w="calc(37% - 3.33px)"
				h="70px"
				label="Agregar fotos"
				icon={
					<GoPlus size={13} />
				}
				onClick={() => onClickAddPhotos()}
			/>
			<CardAction
				withBorder
				w="calc(37% - 3.33px)"
				h="70px"
				label="Crear Carpeta"
				icon={
					<FaRegFolderOpen size={12} />
				}
			/>
			<CardAction
				withBorder
				w="calc(25% - 11px)"
				h="50px"
				fillIcon={false}
				icon={
					<BsStars size={15} />
				}
				zoomContent={1}
				label="Autofill"
			/>
		</Group>
	);
};

export default ActionsGroup;
