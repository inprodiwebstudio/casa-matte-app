
//Own Components
import { shallowEqual, useSelector } from "react-redux";
import { useNavigate, useParams }    from "react-router";
import {Reload}                      from "Resources/icons";
import "./FrontPage.scss";
import BookPages                     from "components/BookPages";

const FrontPage = () => {
	const navigate = useNavigate();
	const { pageId } = useParams();


	const isLoading = useSelector((state) => state.workSpaceSlice?.loading, shallowEqual);

	const workSpaceFrontPage = useSelector((state) => state.workSpaceSlice.data?.frontPage, shallowEqual);

	const handlerSelectPage = () => {
		navigate("frontpage");
	};

	return (
		<div
			className={`FrontPage ${(pageId === "frontpage") && "isInThisPage"}`}
			onClick={() => handlerSelectPage()}
		>
			<div
				className="my-page-container"
			>
				<div className="drag-icon-conatainer">
					<div style={{width : "15px"}}>&nbsp;</div>
				</div>
				<div>
					<div className="withe-page-container">
						{
							workSpaceFrontPage && (
								<BookPages
									isInWorkSpcae={false}
									isInPaginator={true}
									loading={isLoading}
									pageData={workSpaceFrontPage}
								/>
							)
						}
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
