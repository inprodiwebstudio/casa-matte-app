import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { workSpaceSlice }                         from "store/Slices";
import { useParams }                              from "react-router-dom";

//Constants
import photoBooksConfing                       from "core/constants/photoBooksConfing";
import ActionImagesLayout                      from "./ActionImagesLayout";
import { handlerResizerImage, selectPhotoUrl } from "./layoutMod.helpers";
//Styles
import "./LayoutMods.scss";

const LayoutMod = ({
	images,
	sheetNo,
	modLayout,
	isInWorkSpcae,
}) => {
	const { pageId } = useParams();

	const dispatch = useDispatch();

	const dragerImage = useSelector((state) => state.workSpaceSlice.currentPhotoDragger, shallowEqual);
	const photoBookData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);

	const photobookProduct = photoBookData?.product ?? "white";

	const photobookFormat = photoBookData?.format ?? "vertical";

	const photobookSize = photoBookData?.sizePhotoBook ?? "grande";

	const configFormatPhotoBook = photoBooksConfing[photobookProduct][photobookFormat];

	const modConfig = configFormatPhotoBook?.sizes[photobookSize]?.layoutMods[modLayout];

	const listOfSections = Object.values(modConfig?.sections);

	const listOfnestedSections = (nestedObjSection) => {
		const list = Object.values(nestedObjSection);
		return list;
	};

	const handleDrop = (e, layoutNo) => {
		e.preventDefault();
		dispatch(workSpaceSlice.actions.addPhoto({
			pageId   : pageId,
			sheetNo  : sheetNo,
			layoutNo : layoutNo,
			image    : dragerImage,
		}));
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const classNameStyle = `${modLayout}-${photobookSize}-${photobookFormat}`;

	return (
		<div className={classNameStyle}>
			{
				listOfSections.map((section, indexSection) => (
					<div key={indexSection} className={`section-${indexSection}`}>
						{
							listOfnestedSections(section?.subSections)?.map((subSection, indexSubSection) => (
								<div key={indexSubSection} className={`subSection-${indexSubSection}`}>
									{
										listOfnestedSections(subSection?.bodyElements)?.map((bodyElement, indexBodyElement) => (
											<div key={indexBodyElement} className={`bodyElement-${indexBodyElement}`}>
												{
													listOfnestedSections(bodyElement?.elements)?.map((element, indexElement) => (
														<div
															key={indexElement}
															className={`element-${indexElement}`}
															onDrop={(e) => handleDrop(e, element?.numberOfElement)}
															onDragOver={(e) => handleDragOver(e)}
															id={`${classNameStyle}-section-${indexSection}-subSection-${indexSubSection}-bodyElement-${indexBodyElement}-element-${indexElement}`}
															{
																...( (images && element?.type === "photo") &&  {
																	style : {
																		backgroundImage    : `url(${handlerResizerImage(images[element?.numberOfElement], isInWorkSpcae)})`,
																		backgroundSize     : "cover",
																		backgroundPosition : "center",
																		backgroundRepeat   : "no-repeat",
																	},
																} )
															}
														>
															{
																(images && (element?.type === "photo") && images[element?.numberOfElement]?.url && isInWorkSpcae) && (
																	<ActionImagesLayout
																		containerPhotoUuid={`${classNameStyle}-section-${indexSection}-subSection-${indexSubSection}-bodyElement-${indexBodyElement}-element-${indexElement}`}
																		sheetNo={sheetNo}
																		layoutNo={element?.numberOfElement}
																		pageId={pageId}
																		image={selectPhotoUrl(images[element?.numberOfElement])}
																	/>
																)
															}
														</div>
													))
												}
											</div>
										))
									}
								</div>
							))
						}
					</div>
				))
			}
		</div>
	);
};

export default LayoutMod;
