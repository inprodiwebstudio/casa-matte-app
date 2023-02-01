
//Own Components
import FormatPage      from "components/FormatPage";
import { useNavigate } from "react-router";
import {Reload}        from "Resources/icons";
import "./FrontPage.scss";

const FrontPage = () => {
	const navigate = useNavigate();
	return (
		<div
			className="FrontPage"
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
						<FormatPage
							typeFormat="LargeFormat"
							pageData={{
								id     : "page1",
								sheet1 : {
									layoutType : "FrontLayout",
									text       : "",
									photos     : {
										1 : "",
									},
								},
							}}
						/>
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
