import { useState }                               from "react";
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

const Footer = () => {
	const [ dropedToggle, setDropedToggle ] = useState(false);

	const dispatch = useDispatch();

	const currentFileterLayout = useSelector((state) => state.workSpaceSlice.layoutFilter, shallowEqual);
	const loading = useSelector((state) => state.workSpaceSlice.loading, shallowEqual);


	const handleChangeLayoutFilter = (objValue) => {
		dispatch(workSpaceSlice.actions.setLayoutFilter({
			type           : currentFileterLayout.type,
			photosQuantity : objValue,
		}));
	};

	return (
		<div id="Footer" className={`${dropedToggle && "full-size"}`}>
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
				<Tabs tabList={filterTabs} loading={loading} />
			</div>
			<div className="body-layouts-container">
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
				<div className="LayoutsContainer">
					<LayoutsList />
				</div>
			</div>
		</div>
	);
};

export default Footer;
