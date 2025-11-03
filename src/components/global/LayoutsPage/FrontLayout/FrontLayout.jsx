// import { useSelector, shallowEqual } from "react-redux";

//Own components
import { shallowEqual, useSelector } from "react-redux";
import "./FrontLayout.scss";
import { Stack }                     from "@mantine/core";
import Text                          from "components/LayoutHandler/Text";
import { TextShell }                 from "core/components";
import { textInsertion }             from "helpers";
import { useHandlerTypeConfigBooks } from "helpers/Hooks/useHandlerTypeConfigBooks";

const FrontLayout = ({
	pageData,
	isThumbNail,
	isInPaginator,
	isInWorkSpcae,
}) => {
	const defaultSpineBook = "<p style='text-align: center;'><span style='font-size: 30px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const photoBooksConfig = useHandlerTypeConfigBooks();

	const photoBookData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);

	const photobookSize = photoBookData?.sizePhotoBook ?? "grande";

	const currentPhotoBook = (photoBookData?.product === "" || !photoBookData?.product) ? "white" : photoBookData?.product;

	const boundText = textInsertion(photoBookData?.bound, defaultSpineBook, true);

	const photoBookFormat = photoBookData?.format ?? "vertical";

	const handleLayoutMod = () => {
		if (pageData) {
			const LayoutMod = photoBooksConfig[currentPhotoBook]?.[photoBookFormat]?.sizes?.[photobookSize]?.layoutMods[pageData?.sheet1?.layoutType]?.layout;
			if (LayoutMod) {
				return <LayoutMod isThumbNail={isThumbNail} isInPaginator={isInPaginator} data={pageData?.sheet1} isInWorkSpace={isInWorkSpcae} sheetNo={1} />;
			}
		}
		return <></>;
	};

	return (
		<div className="body-front-layout">
			<div className="back-book" />
			<div className={`spacer-front-book ${isInPaginator && "is-in-paginator"}`}>
				<div className="spine-text">
					<Stack>
						<Text
							isBound={true}
							sizes={{
								"chico"   : "28px",
								"regular" : "30px",
								"grande"  : "34px",
							}}
							align="center"
							textShell={() => <TextShell.Title />}
							data={boundText}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={0}
						/>
					</Stack>
				</div>
			</div>
			<div className="front-book">
				<div className="body-front-container">
					{
						pageData && (
							handleLayoutMod()
						)
					}
				</div>
			</div>
		</div>
	);
};

export default FrontLayout;
