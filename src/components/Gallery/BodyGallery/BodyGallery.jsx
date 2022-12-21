import { useState, useEffect } from "react";
import { SquareLoader }        from "react-spinners";
import { connect }             from "react-redux";


//Own components
import Folder    from "../Folder";
import DropDoc   from "../DropDoc";
import PhotoCard from "../PhotoCard";
// import { genericApi } from "store/api/genericApi";

import {
	Button,
	CheckBox,
	ScrollBar,
	SelectorMenuItem,
} from "core/components";
import { gallerySlice }                           from "store/Slices";
import { convertToArray, isValidArray, bindAll }  from "helpers";
import { CircleArrow, CrossSelector, FilterIcon } from "Resources/icons";
import "./BodyGallery.scss";

const BodyGallery = ({
	galleryData,
	gallerySlice,
	fetchingPhotos,
	fetchingFolders,
	galleryPathRoute,
	galleryFolderData,
	galleryPhotosData,
	gallerySelectedData,
	galleryTypeDropedView,
}) => {
	// const { data : galleryFolderData, isFetching : fetchingFolders } = genericApi.useGetDataQuery({
	// 	module : "gallery",
	// 	params : {
	// 		meta_key   : "isfolder",
	// 		meta_value : "true",
	// 	},
	// });

	// const { data : galleryPhotosData, isFetching : fetchingPhotos } = genericApi.useGetDataQuery({
	// 	module : "gallery",
	// 	params : {
	// 		meta_key   : "parentid",
	// 		meta_value : "route",
	// 	},
	// });

	const isAvailableDocs = isValidArray(galleryFolderData) || isValidArray(galleryPhotosData);

	const [ myGalleryData, setMyGalleryData ] = useState([]);

	const [ isHideSelected, setIsHideSelected ] = useState(false);

	const isSelectedData = isValidArray(convertToArray(gallerySelectedData));

	useEffect(() => {
		const toArrData = Object.values(galleryData).map(data => data);
		if (galleryPathRoute === "main") {
			const dataFilteredMain = toArrData.filter(dirent => (!dirent?.parentId));
			setMyGalleryData(dataFilteredMain);
			return;
		}
		const dataFilteredPath = toArrData.filter(dirent => dirent?.parentId === galleryPathRoute);
		setMyGalleryData(dataFilteredPath);
	}, [galleryData, galleryPathRoute]);

	return (
		<div className="BodyGallery">
			<div className="header-gallery-container">
				<div className="header-actions-gallery">
					{
						(isAvailableDocs && (!fetchingFolders && !fetchingPhotos)) && (
							<>
								<CheckBox label="OCULTAR FOTOS USADAS" isActive={isHideSelected} onChange={() => setIsHideSelected(!isHideSelected)} />
								<Button width={84} fontSize={12} type="outline">AUTOFILL</Button>
							</>
						)
					}
				</div>
				<h3>{galleryPathRoute === "main" ? "GALERÍA" : galleryPathRoute}</h3>
				<div className="actions-header-container">
					<div className="icon-style">
						{
							galleryPathRoute !== "main" && (
								<CircleArrow size="30px" onClick={() => gallerySlice.setGalleryPath("main")} />
							)
						}
					</div>
					{
						isValidArray(myGalleryData) && (
							<div className="filter-selector-container">
								<div className="selector-input">
									<SelectorMenuItem type="light" placeholder="Ordenar por" leftIcon={<FilterIcon size="15px" />} />
								</div>
							</div>
						)
					}
					<div className="icon-style" {...(isSelectedData && {onClick : () => gallerySlice.clearSelectedData()})}>
						{
							isSelectedData && (
								<CrossSelector size="30px" onClick={() => gallerySlice.clearSelectedData()} />
							)
						}
					</div>
				</div>
			</div>
			{
				(fetchingFolders || fetchingPhotos) && (
					<div style={{width : "100%", height : "100%", display : "flex", justifyContent : "center", paddingTop : "70%"}}>
						<SquareLoader
							color={"#B2AFA6"}
							loading={true}
							size={40}
							aria-label="Loading Spinner"
							data-testid="loader"
						/>
					</div>
				)
			}
			{
				((!fetchingFolders && !fetchingPhotos) && !isAvailableDocs) && (
					<DropDoc />
				)
			}
			{
				((!fetchingFolders && !fetchingPhotos) && isAvailableDocs) && (
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
									<DropDoc />
								</div>
							)
						}
						<div className="docs-list">
							<div className="folder-grid">
								{
									galleryFolderData?.map(data => (
										<Folder
											key={data?.id}
											name={data?.meta?.name}
											images={data?.meta?.thumbimages}
											onSelectedFolder={() => gallerySlice.setGalleryPath(data?.id)}
											handleMovePhotos={() =>gallerySlice.moveToFolder(data?.id)}
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
									galleryPhotosData?.map((data, index) => (
										<PhotoCard
											key={index}
											image={data?.meta?.imageurl}
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

const mapStateToProps = ({ gallerySlice }) => ({
	galleryData           : gallerySlice?.data ?? {},
	galleryPathRoute      : gallerySlice?.galleryPathName ?? "main",
	gallerySelectedData   : gallerySlice?.selectedData ?? {},
	galleryTypeDropedView : gallerySlice?.typeDropedView ?? null,
});

const mapDispatchToProps = bindAll({ gallerySlice : gallerySlice.actions});

export default connect(mapStateToProps, mapDispatchToProps) (BodyGallery);
