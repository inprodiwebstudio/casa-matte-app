import { useNavigate, useParams } from "react-router-dom";
import { Draggable }              from "react-beautiful-dnd";
import { connect }                from "react-redux";

//Own Components
import BookSheets from "components/BookSheets";
import { Cross }  from "Resources/icons";
import "./ItemPage.scss";

const ItemPage = ({
	index,
	pageData,
	isFixedPage,
	draggableId,
	handleDelete,
	sizePhotoBook,
}) => {
	const isDoublePage = ["Mod1", "Mod2", "Mod3", "FrontLayout"].includes(pageData?.sheet1?.layoutType);
	const navigate = useNavigate();

	const LayoutComponent = BookSheets[sizePhotoBook] ?? BookSheets["LargeFormat"];

	const { pageId } = useParams();

	const isCurrentPage = pageId === draggableId;

	const RenderView = ({ provided, snapShot }) => (
		<div
			className={`ItemPage ${isCurrentPage && "isActivePage"} ${isFixedPage && "isFixed"}`}
			onClick={() => navigate(draggableId)}
			{
				...(provided && {
					ref : provided.innerRef,
					...provided.dragHandleProps,
					...provided.draggableProps,
				})
			}
		>
			<div
				className="my-page-container"
				style={{
					background : snapShot?.isDragging && "#E9E4D9",
				}}
			>
				<div className="drag-icon-conatainer">
					<div style={{width : "15px", height : "15px"}} />
				</div>
				<div>
					<div className="withe-page-container">
						{
							(!isDoublePage && pageData?.sheet2) && (
								<div className="spacer-paginator" />
							)
						}
						<LayoutComponent
							pageData={pageData}
						/>
					</div>
					<div className={`pages-book-conatier ${!pageData?.sheet2 && "isUniqPage"}`}>
						<p>{pageData?.sheet1?.pageNo}</p>
						{
							pageData?.sheet2?.pageNo && (
								<p>{pageData?.sheet2?.pageNo}</p>
							)
						}
					</div>
				</div>
				<div
					className="cross-icon-conatiner"
					{
						...(provided && {
							onClick : () => handleDelete(pageData?.id),
						})
					}
				>
					{
						provided ? <Cross size="9px" /> : <div style={{width : "9px", height : "9px"}} />
					}
				</div>
			</div>
		</div>
	);

	if (isFixedPage) {
		return <RenderView />;
	}

	return (
		<Draggable
			index={index}
			draggableId={draggableId}
			isDragDisabled={!pageData?.sheet2}
			disableInteractiveElementBlocking={true}
		>
			{(provided, snapShot) => (
				<RenderView provided={provided} snapShot={snapShot} />
			)}
		</Draggable>
	);
};

const mapStateToProps = ({ workSpaceSlice }) => ({
	sizePhotoBook : workSpaceSlice?.data?.sizePhotoBook ?? "LargeFormat",
});

export default connect(mapStateToProps) (ItemPage);
