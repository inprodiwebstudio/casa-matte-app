import { useState, useEffect } from "react";
import { connect }             from "react-redux";
//Own components
import Folder         from "../Folder";
import DropDoc        from "../DropDoc";
import PhotoCard      from "../PhotoCard";
import GalleryLoading from "../GalleryLoading";


import {
	Button,
	CheckBox,
	ScrollBar,
	SelectorMenuItem,
} from "core/components";
import { gallerySlice, workSpaceSlice }          from "store/Slices";
import { convertToArray, isValidArray, bindAll } from "helpers";
import { CircleArrow, ActionCross }              from "Resources/icons";
import "./BodyGallery.scss";
import { gallerySeparation }                     from "./BodyGallery.helpers";

const BodyGallery = ({
	isLoggedIn,
	galleryData,
	gallerySlice,
	currentFilter,
	workSpaceData,
	workSpaceSlice,
	galleryPathRoute,
	isLoadingMutation,
	isFullSizeSideBar,
	gallerySelectedData,
	isLoadingGalleryData,
	galleryTypeDropedView,
}) => {
	const galleryList = convertToArray(galleryData);

	const isAvailableDocs = isValidArray(galleryList);

	const [ myPhotos, setMyPhotos ] = useState([]);

	const [ myFolders, setMyFolders ] = useState([]);

	const [ isHideSelected, setIsHideSelected ] = useState(false);

	const [ selectedImagesIds, setSelectedImagesIds ] = useState([]);

	const isSelectedData = isValidArray(convertToArray(gallerySelectedData));

	useEffect(() => {
		if (isAvailableDocs && (currentFilter?.value === "DESC_CAPTURE")) {
			const filterData = myPhotos?.filter(data => data?.embeddedMetadata?.DateTimeOriginal);
			const filterNotCapture = myPhotos?.filter(data => !data?.embeddedMetadata?.DateTimeOriginal);
			const newData = filterData?.sort((a, b) => {
				const c = new Date(a?.embeddedMetadata?.DateTimeOriginal);
				const d = new Date(b?.embeddedMetadata?.DateTimeOriginal);
				return d-c;
			});
			setMyPhotos([...newData, ...filterNotCapture]);
		}
	}, [currentFilter]);

	useEffect(() => {
		if (isAvailableDocs) {
			const newPhotos = gallerySeparation(galleryList, false);
			const newFolders = gallerySeparation(galleryList, true);
			// const leaverFolderEdited = newFolders.filter(e => e.name !== "edited");
			setMyPhotos(newPhotos);
			setMyFolders(newFolders);
			return;
		}
	}, [galleryData]);

	useEffect(() => {
		const pagesList = convertToArray(workSpaceData?.pages);
		const listOfAllPages = [workSpaceData?.frontPage, ...pagesList];
		const newDataSelected = [];
		if (isValidArray(pagesList)) {
			listOfAllPages.forEach((data, i) => {
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
						(isAvailableDocs && (!isLoadingGalleryData)) && (
							<>
								<CheckBox
									isActive={isHideSelected}
									label="OCULTAR FOTOS USADAS"
									isLoading={isLoadingMutation}
									onChange={() => setIsHideSelected(!isHideSelected)}
								/>
								<Button
									width={84}
									fontSize={12}
									type="outline"
									onClick={() => workSpaceSlice.autoFillImages(myPhotos)}
									isLoading={isLoadingMutation}
								>
									AUTOFILL
								</Button>
							</>
						)
					}
				</div>
				<h3 className={(isLoadingGalleryData || !isLoggedIn) && "loading"}>{galleryPathRoute?.id === "route" ? "GALERÍA" : galleryPathRoute?.name}</h3>
				<div className="actions-header-container">
					<div className="icon-style">
						{
							((galleryPathRoute?.id !== "route") && !isLoadingGalleryData && !isLoadingMutation) && (
								<CircleArrow size="30px" onClick={() => gallerySlice.setGalleryPath({id : "route", name : "route"})} />
							)
						}
					</div>
					{
						(isAvailableDocs && !isLoadingGalleryData) && (
							<div className="filter-selector-container">
								<div className="selector-input">
									<SelectorMenuItem
										type="light"
										placeholder="ORDENAR POR..."
										options={[
											{
												label : "NOMBRE",
												value : "DESC_NAME",
											},
											{
												label : "FECHA DE SUBIDA",
												value : "DESC_CREATED",
											},
											{
												label : "FECHA DE CAPTURA",
												value : "DESC_CAPTURE",
											},
										]}
										isLoading={isLoadingMutation}
										value={currentFilter}
										onChange={(data) => gallerySlice.setFilter(data)}
										leftIcon={<></>}
									/>
								</div>
							</div>
						)
					}
					<div style={{
						display        : "flex",
						justifyContent : "flex-end",
						width          : "fit-content",
						transition     : "all ease 200ms",
					}}>
						{
							(isSelectedData && !isLoadingGalleryData) && (
								<ActionCross onClick={() => gallerySlice.clearSelectedData()} className="disSelect" />
							)
						}
					</div>
				</div>
			</div>
			{
				(isLoadingGalleryData || !isLoggedIn) && (
					<GalleryLoading />
				)
			}
			{
				((!isLoadingGalleryData) && !isAvailableDocs && isLoggedIn) && (
					<div
						style={{
							top       : "17%",
							height    : "78%",
							position  : "absolute",
							width     : "92%",
							display   : "flex",
							overflowY : "hidden",
							overflowX : "hidden",
						}}
					>
						<DropDoc />
					</div>
				)
			}
			{
				((!isLoadingGalleryData) && isAvailableDocs && isLoggedIn) && (
					<ScrollBar>
						{
							galleryTypeDropedView && (
								<div
									style={{
										zIndex     : "2",
										position   : "absolute",
										height     : "calc(100% - 173px)",
										width      : "calc(100% - 90px)",
										display    : "flex",
										background : "rgba(247, 245, 241, 0.95)",
									}}
								>
									<DropDoc />
								</div>
							)
						}
						<div className="docs-list">
							{isValidArray(myFolders) && (
								<div className="folder-grid">
									{
										myFolders.map( data => (
											<Folder
												key={data?.id}
												images={[""]}
												name={data?.name}
												folderId={data?.id}
												loadingMutationGallery={isLoadingMutation}
												onSelectedFolder={() => gallerySlice.setGalleryPath({id : data?.fileId, name : data?.name})}
											/>
										))
									}
								</div>
							)}
							<div className="separator-container">
								<p>FOTOS</p>
								<div className="spacer-line" />
							</div>
							<div className={`photo-grid ${isFullSizeSideBar && "isFullSize"}`}>
								{
									myPhotos.map( (data, index) => (
										<PhotoCard
											key={index}
											image={data?.url}
											fileId={data?.id}
											isfullSize={isFullSizeSideBar}
											isHideSelected={isHideSelected}
											isSelected={isInUsePhoto(data?.id)}
											onSelected={() => gallerySlice.setSelectedData(data)}
											isChecked={gallerySelectedData[data?.id] ? true : false}
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

const mapStateToProps = ({ gallerySlice, workSpaceSlice, authSlice }) => ({
	isLoadingGalleryData  : gallerySlice?.isLoadingGalleryData ?? false,
	isLoadingMutation     : gallerySlice?.isLoadingMutation ?? false,
	isFullSizeSideBar     : gallerySlice?.isFullSizeSideBar ?? false,
	galleryData           : gallerySlice?.data ?? {},
	galleryPathRoute      : gallerySlice?.galleryPathName ?? "route",
	gallerySelectedData   : gallerySlice?.selectedData ?? {},
	workSpaceData         : workSpaceSlice?.data ?? {},
	loading               : workSpaceSlice?.loading ?? true,
	galleryTypeDropedView : gallerySlice?.typeDropedView ?? null,
	currentFilter         : gallerySlice?.filter ?? undefined,
	isLoggedIn            : authSlice?.loggedIn ?? false,
});

const mapDispatchToProps = bindAll({ gallerySlice : gallerySlice.actions, workSpaceSlice : workSpaceSlice.actions});

export default connect(mapStateToProps, mapDispatchToProps) (BodyGallery);
