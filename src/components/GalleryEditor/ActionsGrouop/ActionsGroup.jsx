import { Group }           from "@mantine/core";
import React               from "react";
import CardAction          from "../CradAction";
import { GoPlus }          from "react-icons/go";
import { FaRegFolderOpen } from "react-icons/fa";
import { BsStars }         from "react-icons/bs";

//Slices
import { gallerySlice, workSpaceSlice } from "store/Slices";

//Redux
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { convertToArray }                         from "helpers";

const ActionsGroup = ({...rest}) => {
	const dispatch = useDispatch();

	const galleryData = useSelector((state) => state.gallerySlice.data, shallowEqual);
	const typeViewList = useSelector((state) => state.gallerySlice.typeViewList, shallowEqual);

	const onClickAddPhotos = () => {
		dispatch(gallerySlice.actions.setTypeDropedView("photos"));
		dispatch(gallerySlice.actions.setTypeViewList("photos"));
	};

	const onClickAddFolder = () => {
		dispatch(gallerySlice.actions.setTypeDropedView("folders"));
		dispatch(gallerySlice.actions.setTypeViewList("folders"));
	};

	const onClickAutofill = () => {
		dispatch(workSpaceSlice.actions.autoFillImages(convertToArray(galleryData)));
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
				onClick={() => onClickAddFolder()}
			/>
			{
				(typeViewList === "photos") && (
					<CardAction
						withBorder
						w="calc(25% - 11px)"
						h="50px"
						fillIcon={false}
						icon={
							<BsStars size={15} />
						}
						onClick={onClickAutofill}
						zoomContent={1}
						label="Autofill"
					/>
				)
			}
		</Group>
	);
};

export default ActionsGroup;
