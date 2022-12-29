import { useState } from "react";
import { connect }  from "react-redux";
import BodyGallery  from "components/Gallery/BodyGallery";

//Own components
import { gallerySlice }                          from "store/Slices";
import { genericApi }                            from "store/api/genericApi";
import { convertToArray, isValidArray, bindAll } from "helpers";
import { deleteImageKitIo }                      from "./SideBar.helpers";
import { ArrowTop, FolderPlus, DropFile, Thrash} from "Resources/icons";
import "./SideBar.scss";

const SideBar = ({gallerySlice, galleryPath, selectedData}) => {
	const [ isfullSize, setIsFullSize ] = useState(false);

	const [galleryMutation] = genericApi.useDeleteMutation();

	const { data : galleryData, isFetching } = genericApi.useGetDataQuery({
		module : "gallery",
		params : {
			per_page   : 50,
			meta_key   : "parentid",
			meta_value : galleryPath?.id,
		},
	});

	const isAvailableDocs = isValidArray(galleryData);

	const isSelectedData = isValidArray(convertToArray(selectedData));

	const deleteImages = () => {
		const parseToArr = convertToArray(selectedData);
		const listOfSelectedImages = parseToArr.map( image => (image?.meta?.fileid));
		const promisesImages = parseToArr.map( async (image, index) => {
			const resRequest = await galleryMutation({
				module : `gallery/${image.id}`,
				tags   : (index === parseToArr.length - 1) ? ["gallery"] : ["null"],
			});
			return resRequest;
		});
		Promise.allSettled([...promisesImages]).then((values) => {
			deleteImageKitIo(listOfSelectedImages);
		}, reason => {
			console.error(reason);
		});
	};

	return (
		<div id="SideBar" className={isAvailableDocs ? (isfullSize && "isFullSize") : "isNoData"}>
			{
				((!isFetching) && isAvailableDocs) && (
					<div className={`actions-sidebar-conatiner ${isfullSize && "isFullSize"}`}>
						<div className="icon-sidebar-action" onClick={() => setIsFullSize(!isfullSize)}>
							<ArrowTop size="18px" className="icon-arrow-action" />
						</div>
						<div className="icon-sidebar-action" onClick={() => gallerySlice.setTypeDropedView("addFiles")}>
							<DropFile size="18px" />
						</div>
						{
							galleryPath?.id === "route" && (
								<div className="icon-sidebar-action" onClick={() => gallerySlice.setTypeDropedView("addFolder")}>
									<FolderPlus size="20px" />
								</div>
							)
						}
						{
							isSelectedData && (
								<div className="icon-sidebar-action" onClick={() => deleteImages()}>
									<Thrash size="20px" />
								</div>
							)
						}
					</div>
				)
			}
			<div className="body-sidebar">
				<BodyGallery isFetching={isFetching} galleryData={galleryData} />
			</div>
		</div>
	);
};

const mapStateToProps = ({ gallerySlice }) => ({
	selectedData : gallerySlice?.selectedData ?? {},
	galleryPath  : gallerySlice?.galleryPathName ?? "route",
});

const mapDispatchToProps = bindAll({ gallerySlice : gallerySlice.actions});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
