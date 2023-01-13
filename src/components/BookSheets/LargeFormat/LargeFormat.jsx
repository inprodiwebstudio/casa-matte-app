//Own components
import layouts            from "components/global/LayoutsPage/LargeFormat";
import { convertToArray } from "helpers";
import FrontLayout        from "components/global/LayoutsPage/FrontLayout";
import "./LargeFormat.scss";

const LargeFormat = ({pageData}) => {
	const isSinglePage = ["Mod1", "Mod2", "Mod3", "FrontLayout"].includes(pageData?.sheet1?.layoutType);

	const LayoutPage1 = layouts[pageData?.sheet1?.layoutType];
	const LayoutPage2 = layouts[pageData?.sheet2?.layoutType];

	const photoList = (sheetId) => {
		const sheetData = pageData[sheetId];
		const listOfImages = convertToArray(sheetData.photos);
		return listOfImages;
	};

	return (
		<div className="LargeFormat">
			<div className="page-body">
				{
					!LayoutPage1 ? (
						<FrontLayout />
					) : (
						<LayoutPage1 images={photoList("sheet1")} />
					)
				}
			</div>
			{
				!isSinglePage && (
					<div className="spacer" />
				)
			}
			{
				!isSinglePage && (
					<div className="page-body">
						{
							!LayoutPage2 ? (
								<div />
							) : (
								<LayoutPage2 images={photoList("sheet2")} />
							)
						}
					</div>
				)
			}
		</div>
	);
};

export default LargeFormat;
