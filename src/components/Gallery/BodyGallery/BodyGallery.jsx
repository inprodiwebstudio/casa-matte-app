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
	loading,
	refetch,
	isfullSize,
	isLoggedIn,
	isFetching,
	galleryData,
	gallerySlice,
	workSpaceData,
	currentFilter,
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

	const galleryLoading = isFetching;

	useEffect(() => {
		if (!isAvailableDocs) {
			gallerySlice.setGalleryPath({id : "route", name : "route"});
		}
	}, [galleryData]);


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
		if (isValidArray(galleryData)) {
			const newPhotos = gallerySeparation(galleryData, false);
			const newFolders = gallerySeparation(galleryData, true);
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
						(isAvailableDocs && (!galleryLoading)) && (
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
				<h3 className={(galleryLoading || !isLoggedIn) && "loading"}>{galleryPathRoute?.id === "route" ? "GALERÍA" : galleryPathRoute?.name}</h3>
				<div className="actions-header-container">
					<div className="icon-style">
						{
							((galleryPathRoute?.id !== "route") && !galleryLoading && !loadingMutationGallery) && (
								<CircleArrow size="30px" onClick={() => gallerySlice.setGalleryPath({id : "route", name : "route"})} />
							)
						}
					</div>
					{
						(isAvailableDocs && !galleryLoading) && (
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
										isLoading={loadingMutationGallery}
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
							(isSelectedData && !loadingMutationGallery) && (
								<ActionCross onClick={() => gallerySlice.clearSelectedData()} className="disSelect" />
							)
						}
					</div>
				</div>
			</div>
			{
				(galleryLoading || !isLoggedIn) && (
					<GalleryLoading />
				)
			}
			{
				((!galleryLoading) && !isAvailableDocs && isLoggedIn) && (
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
						<DropDoc galleryMutation={galleryMutation} refetch={refetch} />
					</div>
				)
			}
			{
				((!galleryLoading) && isAvailableDocs && isLoggedIn) && (
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
									<DropDoc galleryMutation={galleryMutation} refetch={refetch} />
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
							<div className={`photo-grid ${isfullSize && "isFullSize"}`}>
								{
									myPhotos.map( (data, index) => (
										<PhotoCard
											key={index}
											image={data?.url}
											fileId={data?.public_id}
											isfullSize={isfullSize}
											isHideSelected={isHideSelected}
											isSelected={isInUsePhoto(data?.public_id)}
											loadingMutationGallery={loadingMutationGallery}
											onSelected={() => gallerySlice.setSelectedData(data)}
											isChecked={gallerySelectedData[data?.public_id] ? true : false}
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
