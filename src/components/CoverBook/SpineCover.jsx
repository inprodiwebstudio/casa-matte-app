import { Stack }                     from "@mantine/core";
import Text                          from "components/LayoutHandler/Text";
import { TextShell }                 from "core/components";
import { textInsertion }             from "helpers";
import { shallowEqual, useSelector } from "react-redux";

const SpineCover = ({
	isInPaginator,
	isThumbNail,
}) => {
	const photoBookData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);
	const availableSpine = useSelector((state) => state.workSpaceSlice.data.availableSpine, shallowEqual);

	const isLargePhotoBook = photoBookData?.sizePhotoBook === "grande";

	const defaultSpineBook = `<p style="text-align: center;"><span style="font-size: ${isLargePhotoBook ? "28" : "22"}px; font-family: Aitana-Regular;">TÍTULO</span></p>`;

	const boundText = textInsertion(photoBookData?.bound, defaultSpineBook, true);

	const productType = photoBookData?.product;

	const isAvailablEditeSpine = (productType === "white") || availableSpine;

	const isSencilloPhotoBook = productType === "sencillo";

	const HandlerTextSpine = () => {
		if (productType === "travelcoffeetable ") {

			const currentText = photoBookData?.frontPage?.sheet1?.text?.["2"] === "" ? "<p style='text-align:center;'><span style='font-family:Inter-Lifght;font-size:20px;'>OAXACA — TEOTITLÁN — SAN JOSÉ — OCOTLÁ</span></p>" : photoBookData?.frontPage?.sheet1?.text?.["2"];

			const color = photoBookData?.engraving?.currentColor?.colorHex;

			if (isInPaginator) {
				return (
					 <div>
						&nbsp;
					 </div>
				);
			}

			return <div
				dangerouslySetInnerHTML={{ __html : currentText }}
				style={{ color : color }}
			/>;
		}
		return <Text
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
		/>;
	};

	return (
		<div
			style={{
				width          : "5%",
				height         : (isSencilloPhotoBook && !isInPaginator) ? "100%" : "100%",
				borderRight    : `${isInPaginator ? "1px" : "3px"} solid rgb(217, 216, 216)`,
				borderLeft     : `${isInPaginator ? "1px" : "3px"} solid rgb(217, 216, 216)`,
				display        : "flex",
				justifyContent : "center",
				alignItems     : "center",
			}}
		>
			<Stack
				style={{
					writingMode : "vertical-rl",
				}}
				justify="center"
				align="center"
			>
				{
					isAvailablEditeSpine && (
						<HandlerTextSpine />
					)
				}
			</Stack>
		</div>
	);
};

export default SpineCover;
