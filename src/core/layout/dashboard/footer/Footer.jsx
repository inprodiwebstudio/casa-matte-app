import { useState, useEffect }                    from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import LayoutsList                                from "components/LayoutsList";

//Constants
import { filterTabs, optionsPhotoQuantity } from "./footerConstants";
//Slices
import { workSpaceSlice } from "store/Slices";
//Owwn components
import { Tabs, SelectorMenuItem } from "core/components";
import { ArrowTop }               from "Resources/icons";
import "./Footer.scss";
import { useParams }              from "react-router";

const Footer = () => {
	const [ dropedToggle, setDropedToggle ] = useState(false);

	const { pageId } = useParams();

	const frontPagesTab = [{
		label  : "PORTADAS",
		filter : "portadas",
	}];

	const handleTabsLayouts = pageId !== "frontpage" ? filterTabs : frontPagesTab;

	const dispatch = useDispatch();

	const currentFileterLayout = useSelector((state) => state.workSpaceSlice.layoutFilter, shallowEqual);
	const loading = useSelector((state) => state.workSpaceSlice.loading, shallowEqual);
	const isPreviewActive = useSelector((state) => state.workSpaceSlice.isPreview, shallowEqual);

	const handleChangeLayoutFilter = (objValue) => {
		dispatch(workSpaceSlice.actions.setLayoutFilter({
			type           : currentFileterLayout.type,
			photosQuantity : objValue,
		}));
	};

	useEffect(() => {
	  if (pageId === "frontpage") {
			dispatch(workSpaceSlice.actions.setLayoutFilter({
				type           : "portadas",
				photosQuantity : currentFileterLayout.photosQuantity,
			}));
			return;
	  }
	  dispatch(workSpaceSlice.actions.setLayoutFilter({
			type           : "all",
			photosQuantity : currentFileterLayout.photosQuantity,
		}));
		return;
	}, [pageId]);

	return (
		<div id="Footer" className={`${dropedToggle && "full-size"} ${isPreviewActive && "isActivePreview"}`}>
			<div
				className={`droped-container-action ${dropedToggle && "downArrow"}`}
				{
					...(!loading && {onClick : () => setDropedToggle(!dropedToggle)})
				}
				style={{
					background : loading && "transparent",
				}}
			>
				{
					!loading && (
						<ArrowTop size="20px" />
					)
				}
			</div>
			<div className="header-in-footer-container">
				<Tabs tabList={handleTabsLayouts} loading={loading} />
			</div>
			<div className="body-layouts-container">
				{
					((pageId !== "frontpage") && (currentFileterLayout.type !== "texto")) && (
						<div
							style={{
								marginTop : "15px",
								width     : "103px",
							}}
						>
							<SelectorMenuItem
								isLoading={loading}
								type="filled"
								placeholder="FOTOS"
								onChange={(objValue) => handleChangeLayoutFilter(objValue)}
								options={optionsPhotoQuantity}
								value={currentFileterLayout.photosQuantity}
								dropTopMenu
							/>
						</div>
					)
				}
				<div className="LayoutsContainer">
					<LayoutsList />
				</div>
			</div>
		</div>
	);
};

export default Footer;
