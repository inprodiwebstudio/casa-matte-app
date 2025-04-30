import { convertToArray, isValidArray } from "helpers";
import { useEffect, useState }          from "react";

import BookPages from "components/BookPages";

import "./GhostPages.scss";

const GhostPages = ({ photoBookData }) => {
	const [ pages, setPages ] = useState([]);

	const handlerTypeProductFormat = () => {
		if (photoBookData?.product === "travelcoffeetable ") {
			return "travel-coffee-table";
		}
		return `${photoBookData?.format}-${photoBookData?.sizePhotoBook}`;
	};

	useEffect(() => {
		if (photoBookData && isValidArray(convertToArray({...photoBookData?.pages}))) {
			const myTextPages = convertToArray({...photoBookData?.pages}).filter(myPage => {
				const availableText1 = myPage?.sheet1?.text && (myPage?.sheet1?.text !== "") && myPage?.sheet1?.text[0];
				const availableText2 = myPage?.sheet2?.text && (myPage?.sheet2?.text !== "") && myPage?.sheet2?.text[0];

				return availableText1 || availableText2;
			});
			setPages(myTextPages);
		}
	}, [photoBookData]);

	return (
		<div style={{height : "100vh", width : "100vh"}}>
			<div
				style={{
					height     : "500px",
					width      : "100%",
					overflow   : "hidden",
					background : "red",
				}}
			>
				<div
					className="PreviewPages"
				>
					{
						isValidArray(pages) && (
							pages.map((page, index) => (
								<div className="photoBookContainer" key={index}>
									<div className={`pagesPreviewPhotoBook ${handlerTypeProductFormat()}-preview`}>
										<BookPages
											isInWorkSpcae={true}
											loading={false}
											pageData={page}
										/>
									</div>
								</div>
							))
						)
					}
				</div>
			</div>
		</div>
	);
};

export default GhostPages;
