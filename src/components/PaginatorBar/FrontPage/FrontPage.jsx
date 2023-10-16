
//Own Components
// import BookSheets                 from "components/BookSheets";
import { useNavigate, useParams } from "react-router";
import {Reload}                   from "Resources/icons";
import "./FrontPage.scss";

const FrontPage = () => {
	const navigate = useNavigate();
	const { pageId } = useParams();

	// const LayoutComponent = BookSheets["LargeFormat"];

	return (
		<div
			className={`FrontPage ${(pageId === "frontpage") && "isInThisPage"}`}
			onClick={() => navigate("frontpage")}
		>
			<div
				className="my-page-container"
			>
				<div className="drag-icon-conatainer">
					<div style={{width : "15px"}}>&nbsp;</div>
				</div>
				<div>
					<div className="withe-page-container">
						{/* <LayoutComponent
							pageData={{
								id     : "FrontLayout",
								sheet1 : {
									layoutType : "FrontMod1",
									text       : {},
									photos     : {
										1 : "",
									},
								},
							}}
						/> */}
						<></>
					</div>
					<div className="pages-book-conatier">
						<p>ATRÁS</p>
						<p>FRENTE</p>
					</div>
				</div>
				<div className="cross-icon-conatiner">
					<Reload size="9px" />
				</div>
			</div>
		</div>
	);
};

export default FrontPage;
