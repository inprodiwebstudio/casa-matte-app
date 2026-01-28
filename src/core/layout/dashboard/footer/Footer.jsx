import { useState, useEffect, useContext }        from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import LayoutsList                                from "components/LayoutsList";

//Constants
import { filterTabs, optionsPhotoQuantity } from "./footerConstants";
//Slices
import { workSpaceSlice } from "store/Slices";
//Owwn components
import { currentConfigPhotoBookContext } from "contexts/configContext";
import { Tabs, SelectorMenuItem }        from "core/components";
import { ArrowTop }                      from "Resources/icons";
import { useHandlerTypeConfigBooks }     from "helpers/Hooks/useHandlerTypeConfigBooks";
import "./Footer.scss";
import { convertToArray }                from "helpers";
import { Button, Stack, Text }           from "@mantine/core";

const Footer = () => {
	const {setCurrentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);

	const currentFileterLayout = useSelector((state) => state.workSpaceSlice.layoutFilter, shallowEqual);
	const productionTypeVersion = useSelector((state) => state.workSpaceSlice.data?.productionTypeVersion, shallowEqual);
	const sheetDataSelected = useSelector((state) => state.workSpaceSlice.pageDataSelected, shallowEqual);
	const currentPageId = useSelector((state) => state.workSpaceSlice.data?.currentPage, shallowEqual);
	const loading = useSelector((state) => state.workSpaceSlice.loading, shallowEqual);
	const statusViewPage = useSelector((state) => state.workSpaceSlice?.statusViewPage, shallowEqual);
	const productPhotoBook = useSelector((state) => state.workSpaceSlice.data?.product, shallowEqual);
	const formatPhotoBook = useSelector((state) => state.workSpaceSlice.data?.format, shallowEqual);
	const sizePhotoBook = useSelector((state) => state.workSpaceSlice?.data?.sizePhotoBook, shallowEqual);

	const photoBooksConfig = useHandlerTypeConfigBooks();

	const objLayouts = photoBooksConfig[productPhotoBook]?.[formatPhotoBook]?.sizes?.[sizePhotoBook]?.layoutMods ?? {};

	const [ dropedToggle, setDropedToggle ] = useState(false);

	const frontPagesTab = [{
		label  : "PORTADAS",
		filter : "portadas",
	}];

	const myFilteredTabsLayouts = (productPhotoBook === "layflat") ? filterTabs.filter(tabData => (tabData.filter !== "fotosytexto") && (tabData.filter !== "texto")) : filterTabs;

	const handleTabsLayouts = currentPageId !== "frontpage" ? myFilteredTabsLayouts : frontPagesTab;

	const dispatch = useDispatch();

	const handleChangeLayoutFilter = (objValue) => {
		dispatch(workSpaceSlice.actions.setLayoutFilter({
			type           : currentFileterLayout.type,
			photosQuantity : objValue,
		}));
	};

	const optionsPhotosQuantityFiltered = () => {
		const listOfLayoutsConfig = convertToArray(objLayouts);

		const quantityOfPhotosAvailable = [];

		listOfLayoutsConfig.forEach((layout) => {
			const availableQuantityPhoto = quantityOfPhotosAvailable.find(item => item === layout.numberPhotos);

			if (!availableQuantityPhoto && (layout.numberPhotos !== 0)) {
				quantityOfPhotosAvailable.push(layout.numberPhotos);
			}
		});

		const optionsPhotosQuantity = quantityOfPhotosAvailable.map((item) => {
			return {
				label : `${item} Foto${item > 1 ? "s" : ""}`,
				value : item,
			};
		});

		return [optionsPhotoQuantity[0], ...optionsPhotosQuantity];
	};

	useEffect(() => {
	  if (currentPageId === "frontpage") {
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
	}, [currentPageId]);

	const handlerAddNewText = () => {
		setCurrentConfigPhotoBook(prev => {
			const listOfTexts = Object.values(prev?.[`${sheetDataSelected?.currentPage}`]?.texts ?? {});

			const newKeyText = listOfTexts.length;
			return {
				...prev,
				[`${sheetDataSelected?.currentPage}`] : {
					...prev?.[`${sheetDataSelected?.currentPage}`],
					texts : {
						...prev?.[`${sheetDataSelected?.currentPage}`]?.texts,
						[`${newKeyText}`] : {
							text     : "<p style='text-align: center;'><span style='font-size: 16px; font-family: JosefinSans-Light;'>Agregar texto...</span></p>",
							position : {
								x : 0,
								y : 0,
							},
							sizes : {
								width  : "200px",
								height : "30px",
							},
						},
					},
				},
			};
		});
	};

	return (
		<div id="Footer" className={`${dropedToggle && "full-size"} ${(statusViewPage === "preview") && "isActivePreview"}`}>
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
				<Stack>
					{
						((currentPageId !== "frontpage") && (currentFileterLayout.type !== "texto")) && (
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
									options={optionsPhotosQuantityFiltered()}
									value={currentFileterLayout.photosQuantity}
									dropTopMenu
								/>
							</div>
						)
					}
					{
						(((currentFileterLayout.type === "texto") || (currentFileterLayout.type === "fotosytexto")) && productionTypeVersion) && (
							<Button
								radius={12}
								size="xs"
								color="darkCasaMatte"
								onClick={() => handlerAddNewText()}
								disabled={false}
								mt="10px"
							>
								<Text
									weight={400}
									color="whiteCasaMatte"
									sx={{
										fontFamily : "Helvetica",
									}}
								>
									Agregar Texto
								</Text>
							</Button>
						)
					}
				</Stack>
				<div className="LayoutsContainer">
					<LayoutsList />
				</div>
			</div>
		</div>
	);
};

export default Footer;
