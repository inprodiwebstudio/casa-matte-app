import { useState } from "react";
import { connect }  from "react-redux";

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
import { genericApi }                             from "store/api/genericApi";
import { gallerySlice }                           from "store/Slices";
import { convertToArray, isValidArray, bindAll }  from "helpers";
import { CircleArrow, CrossSelector, FilterIcon } from "Resources/icons";
import "./BodyGallery.scss";

const BodyGallery = ({
	isFetching,
	galleryData,
	gallerySlice,
	galleryPathRoute,
	gallerySelectedData,
	galleryTypeDropedView,
}) => {
	const isAvailableDocs = isValidArray(galleryData);

	const [ isHideSelected, setIsHideSelected ] = useState(false);

	const [galleryMutation, galleryMutationResult] = genericApi.useSubmitDataMutation();

	const loadingMutationGallery = galleryMutationResult.isLoading;

	const isSelectedData = isValidArray(convertToArray(gallerySelectedData));

	return (
		<div className="BodyGallery">
			<div className="header-gallery-container">
				<div className="header-actions-gallery">
					{
						(isAvailableDocs && (!isFetching)) && (
							<>
								<CheckBox label="OCULTAR FOTOS USADAS" isActive={isHideSelected} onChange={() => setIsHideSelected(!isHideSelected)} />
								<Button width={84} fontSize={12} type="outline">AUTOFILL</Button>
							</>
						)
					}
				</div>
				<h3>{galleryPathRoute?.id === "route" ? "GALERÍA" : galleryPathRoute?.name}</h3>
				<div className="actions-header-container">
					<div className="icon-style">
						{
							((galleryPathRoute?.id !== "route") && !isFetching) && (
								<CircleArrow size="30px" onClick={() => gallerySlice.setGalleryPath({id : "route", name : "route"})} />
							)
						}
					</div>
					{
						(isAvailableDocs && !isFetching) && (
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
				(isFetching) && (
					<div style={{width : "100%", height : "100%", display : "flex", justifyContent : "center", alignItems : "center"}}>
						<ChargeSpinner />
					</div>
				)
			}
			{
				((!isFetching) && !isAvailableDocs) && (
					<DropDoc />
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
									<DropDoc />
								</div>
							)
						}
						<div className="docs-list">
							<div className="folder-grid">
								{
									gallerySeparation(galleryData, true).map( data => (
										<Folder
											key={data?.id}
											folderId={data?.id}
											name={data?.meta?.name}
											images={data?.meta?.thumbimages}
											galleryMutation={galleryMutation}
											loadingMutationGallery={loadingMutationGallery}
											onSelectedFolder={() => gallerySlice.setGalleryPath({id : data?.id, name : data?.meta?.name})}
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
									gallerySeparation(galleryData, false).map( (data, index) => (
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
	galleryPathRoute      : gallerySlice?.galleryPathName ?? "route",
	gallerySelectedData   : gallerySlice?.selectedData ?? {},
	galleryTypeDropedView : gallerySlice?.typeDropedView ?? null,
});

const mapDispatchToProps = bindAll({ gallerySlice : gallerySlice.actions});

export default connect(mapStateToProps, mapDispatchToProps) (BodyGallery);
