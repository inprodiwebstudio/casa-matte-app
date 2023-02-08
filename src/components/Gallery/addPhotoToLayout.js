import { bindAll, convertToArray } from "helpers";
import { connect }                 from "react-redux";
import { workSpaceSlice }          from "store/Slices";


const addPhotoToLayout = ({pageData, imageUrl, workSpaceSlice}) => {
	const isNotCompleteSheet1 = convertToArray(pageData?.sheet1?.photos).find(e => e.id === "");

	const isSinglePage = (["Mod1", "Mod2", "Mod3", "FrontLayout"].includes(pageData?.sheet1?.layoutType));
	const isAvailableSheet2 = pageData?.sheet2?.photos[0];

	if (isSinglePage) {
		workSpaceSlice.addPhoto({
			sheetNo  : "sheet1",
			layoutNo : 0,
			image    : imageUrl,
			pageId   : pageData?.id,
		});
		return;
	}
	if (isNotCompleteSheet1) {
		convertToArray(pageData?.sheet1?.photos).forEach((index, data) => {
			if (data?.id === "") {
				workSpaceSlice.addPhoto({
					sheetNo  : "sheet1",
					layoutNo : index,
					image    : imageUrl,
					pageId   : pageData?.id,
				});
				return;
			}
		});
	}
	if (!isNotCompleteSheet1 && isAvailableSheet2) {
		convertToArray(pageData?.sheet2?.photos).forEach((index, data) => {
			if (data?.id === "") {
				workSpaceSlice.addPhoto({
					sheetNo  : "sheet2",
					layoutNo : index,
					image    : imageUrl,
					pageId   : pageData?.id,
				});
				return;
			}
		});
	}
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

export default connect(null, mapDispatchToProps) (addPhotoToLayout);
