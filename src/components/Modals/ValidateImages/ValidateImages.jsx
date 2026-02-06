import { closeAllModals } from "@mantine/modals";
import ModalBody          from "components/global/ModalBody";

import DisclaimerMessage from "./DisclaimerMessage";

import { useEffect, useState }                    from "react";
import AbstaintingPhotos                          from "./AbstaintingPhotos";
import ValidatingPhotos                           from "./ValidatingPhotos";
import ErrorPhotosDisplay                         from "./ErrorPhotosDisplay";
import { isValidArray, urlImagesInPages }         from "helpers";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import handlerRemoveErrorImgs                     from "helpers/Functions/handlerRemoveErrorImgs";
import { workSpaceSlice }                         from "store/Slices";
import { Text }                                   from "@mantine/core";
import { apiImageKit }                            from "store/api/imageKitApi";

const ValidateImages = () => {
	const dispatch = useDispatch();
	const pages = useSelector((state) => state.workSpaceSlice.data?.pages, shallowEqual);

	const [errImgs] = apiImageKit.useCheckImagesMutation();

	const [status, setStatus] = useState("init");

	const [listUrlImages, setListUrlImages] = useState([]);

	const [pagesImgsRemoved, setPagesImgsRemoved] = useState([]);

	const onContinue = () => {
		setStatus("abstainingPhotos");
	};

	const handlerChangeStatus = async () => {
		if (status === "abstainingPhotos") {
			setListUrlImages(urlImagesInPages(pages));
			setStatus("validatingImages");
		}
		if (status === "validatingImages") {
			const errorImages = await errImgs({data : listUrlImages});
			const dataErrImgs = errorImages?.data;
			if (isValidArray(dataErrImgs)) {
				const newPagesRemovedImgs = handlerRemoveErrorImgs(dataErrImgs, pages);
				dispatch(workSpaceSlice.actions.insertPages(newPagesRemovedImgs));
				const listOfPagesRemovedImgs = [];
				for (let i = 0; i < dataErrImgs.length; i++) {
					const img = dataErrImgs[i];
					const pageNo = img.pageNo;
					if (!listOfPagesRemovedImgs.includes(pageNo)) {
						listOfPagesRemovedImgs.push(pageNo);
					}
				}
				setPagesImgsRemoved(listOfPagesRemovedImgs);
				setStatus("imagesErrors");
				return;
			}
			setStatus("success");
		}
	};

	useEffect(() => {
		handlerChangeStatus();
	}, [status]);

	return (
		<ModalBody
			onSubmit={() => onContinue()}
			onClose={() => closeAllModals()}
			isLoading={false}
			textHeader="Comprobar Fotos"
		>
			{
				(status === "init") && (
					<DisclaimerMessage />
				)
			}
			{
				(status === "abstainingPhotos") && (
					<AbstaintingPhotos />
				)
			}
			{
				(status === "validatingImages") && (
					<ValidatingPhotos />
				)
			}
			{
				(status === "imagesErrors") && (
					<ErrorPhotosDisplay pagesImgsRemoved={pagesImgsRemoved} />
				)
			}
			{
				(status === "success") && (
					<Text
						size="15px"
						w="400px"
						align="center"
						mt="15px"
					>
						Todas las fotos fueron validadas, correctamente. No se encontraron problemas
					</Text>
				)
			}
		</ModalBody>
	);
};

export default ValidateImages;
