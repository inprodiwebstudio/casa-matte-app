import { useState, useEffect } from "react";
import { connect }             from "react-redux";

//Own components
import Folder    from "../Folder";
import DropDoc   from "../DropDoc";
import PhotoCard from "../PhotoCard";

import { gallerySeparation } from "./BodyGallery.helpers";

import {
	Button,
	CheckBox,
	ScrollBar,
	ChargeSpinner,
	SelectorMenuItem,
} from "core/components";
import { gallerySlice, workSpaceSlice }           from "store/Slices";
import { convertToArray, isValidArray, bindAll }  from "helpers";
import { CircleArrow, CrossSelector, FilterIcon } from "Resources/icons";
import "./BodyGallery.scss";

const BodyGallery = ({
	isFetching,
	galleryData,
	gallerySlice,
	workSpaceData,
	workSpaceSlice,
	galleryMutation,
	galleryPathRoute,
	gallerySelectedData,
	galleryTypeDropedView,
	loadingMutationGallery,
	galleryImagesMutationMove,
}) => {
	const isAvailableDocs = isValidArray(galleryData);

	const [ myPhotos, setMyPhotos ] = useState([]);

	const [ myFolders, setMyFolders ] = useState([]);

	const [ isHideSelected, setIsHideSelected ] = useState(false);

	const [ selectedImagesIds, setSelectedImagesIds ] = useState([]);

	const isSelectedData = isValidArray(convertToArray(gallerySelectedData));


	useEffect(() => {
		if (isValidArray(galleryData)) {
			const newPhotos = gallerySeparation(galleryData, false);
			const newFolders = gallerySeparation(galleryData, true);
			setMyPhotos(newPhotos);
			setMyFolders(newFolders);
			return;
		}
	}, [galleryData]);

	useEffect(() => {
		const pagesList = convertToArray(workSpaceData?.pages);
		const newDataSelected = [];
		if (isValidArray(pagesList)) {
			pagesList.forEach((data, i) => {
				const isAVailableSheet2 = data?.sheet2;
				const sheet1Photos = convertToArray(data?.sheet1?.photos);

				if (isValidArray(sheet1Photos)) {
					sheet1Photos.forEach((photo, e) => {
						if (photo?.id !== "") {
							newDataSelected.push(photo?.id);
						}
					});
				}

				if (isAVailableSheet2) {
					const sheet2Photos = convertToArray(data?.sheet2?.photos);
					if (isValidArray(sheet2Photos)) {
						sheet2Photos.forEach((photo, e) => {
							if (photo?.id !== "") {
								newDataSelected.push(photo?.id);
							}
						});
					}
				}
			});
		}

		setSelectedImagesIds(newDataSelected);
	}, [workSpaceData, myPhotos]);


	const isInUsePhoto = (imageId) => {
		const findImage = selectedImagesIds.find(id => id === imageId);
		if (findImage) {
			return true;
		}
		return false;
	};

	return (
		<div className="BodyGallery">
			<div className="header-gallery-container">
				<div className="header-actions-gallery">
					{
						(isAvailableDocs && (!isFetching)) && (
							<>
								<CheckBox
									isActive={isHideSelected}
									label="OCULTAR FOTOS USADAS"
									isLoading={loadingMutationGallery}
									onChange={() => setIsHideSelected(!isHideSelected)}
								/>
								<Button
									width={84}
									fontSize={12}
									type="outline"
									onClick={() => workSpaceSlice.autoFillImages(myPhotos)}
									isLoading={loadingMutationGallery}
								>
									AUTOFILL
								</Button>
							</>
						)
					}
				</div>
				<h3>{galleryPathRoute?.id === "route" ? "GALERÍA" : galleryPathRoute?.name}</h3>
				<div className="actions-header-container">
					<div className="icon-style">
						{
							((galleryPathRoute?.id !== "route") && !isFetching && !loadingMutationGallery) && (
								<CircleArrow size="30px" onClick={() => gallerySlice.setGalleryPath({id : "route", name : "route"})} />
							)
						}
					</div>
					{
						(isAvailableDocs && !isFetching) && (
							<div className="filter-selector-container">
								<div className="selector-input">
									<SelectorMenuItem
										type="light"
										placeholder="Ordenar por"
										isLoading={loadingMutationGallery}
										leftIcon={<FilterIcon size="15px" />}
									/>
								</div>
							</div>
						)
					}
					<div className="icon-style" {...(isSelectedData && {onClick : () => gallerySlice.clearSelectedData()})}>
						{
							(isSelectedData && !loadingMutationGallery) && (
								<CrossSelector size="30px" onClick={() => gallerySlice.clearSelectedData()} />
							)
						}
					</div>
				</div>
			</div>
			{
				(isFetching) && (
					<div style={{width : "100%", height : "100%", display : "flex", justifyContent : "center", alignItems : "center"}}>
						<ChargeSpinner />
					</div>
				)
			}
			{
				((!isFetching) && !isAvailableDocs) && (
					<DropDoc galleryMutation={galleryMutation} />
				)
			}
			{
				((!isFetching) && isAvailableDocs) && (
					<ScrollBar>
						{
							galleryTypeDropedView && (
								<div
									style={{
										zIndex     : "2",
										position   : "absolute",
										height     : "calc(100% - 180px)",
										width      : "calc(100% - 60px)",
										display    : "flex",
										background : "rgba(247, 245, 241, 0.95)",
									}}
								>
									<DropDoc galleryMutation={galleryMutation} />
								</div>
							)
						}
						<div className="docs-list">
							<div className="folder-grid">
								{
									myFolders.map( data => (
										<Folder
											key={data?.fileId}
											images={[""]}
											name={data?.name}
											folderId={data?.fileId}
											galleryMutation={galleryMutation}
											loadingMutationGallery={loadingMutationGallery}
											galleryImagesMutationMove={galleryImagesMutationMove}
											onSelectedFolder={() => gallerySlice.setGalleryPath({id : data?.fileId, name : data?.name})}
										/>
									))
								}
							</div>
							<div className="separator-container">
								<p>FOTOS</p>
								<div className="spacer-line" />
							</div>
							<div className="photo-grid">
								{
									myPhotos.map( (data, index) => (
										<PhotoCard
											key={index}
											image={data?.url}
											fileId={data?.fileId}
											isHideSelected={isHideSelected}
											isSelected={isInUsePhoto(data?.fileId)}
											loadingMutationGallery={loadingMutationGallery}
											onSelected={() => gallerySlice.setSelectedData(data)}
											isChecked={gallerySelectedData[data?.fileId] ? true : false}
										/>
									))
								}
							</div>
						</div>
					</ScrollBar>
				)
			}
		</div>
	);
};

const mapStateToProps = ({ gallerySlice, workSpaceSlice }) => ({
	galleryPathRoute      : gallerySlice?.galleryPathName ?? "route",
	gallerySelectedData   : gallerySlice?.selectedData ?? {},
	workSpaceData         : workSpaceSlice?.data ?? {},
	galleryTypeDropedView : gallerySlice?.typeDropedView ?? null,
});

const mapDispatchToProps = bindAll({ gallerySlice : gallerySlice.actions, workSpaceSlice : workSpaceSlice.actions});

export default connect(mapStateToProps, mapDispatchToProps) (BodyGallery);
