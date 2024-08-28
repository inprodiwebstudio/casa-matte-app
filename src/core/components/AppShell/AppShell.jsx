import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useEffect }                              from "react";
import { Font }                                   from "@react-pdf/renderer";

//Own component;
import { PostingConfig }             from "Notifications";
import { genericApi }                from "store/api/genericApi";
import { workSpaceSlice, authSlice } from "store/Slices";
import "./AppShell.scss";
//Fonts
import blackaHollow from "Resources/Fonts/BlakaHollow-Regular.ttf";

const AppShell = ({
	Body,
	header,
	navbar,
	footer,
	sidebar,
}) => {
	Font.register({
		family : "BlakaHollow-Regular",
		src    : blackaHollow,
		fonts  : [
			{
			  src : blackaHollow,
			},
			{
			  src        : blackaHollow,
			  fontWeight : "bold",
			},
			{
			  src        : blackaHollow,
			  fontWeight : "normal",
			  fontStyle  : "italic",
			},
		  ],
	});

	const dispatch = useDispatch();

	const isSelectedPage = useSelector((state) => state.workSpaceSlice?.pageDataSelected, shallowEqual);
	const workSpaceData = useSelector((state) => state.workSpaceSlice?.data, shallowEqual);
	const photoBookId = useSelector((state) => state.authSlice?.user?.photoBookId, shallowEqual);
	const initialData = useSelector((state) => state.workSpaceSlice?.initialData, shallowEqual);

	const { data : photobookData, isFetching, error } = genericApi.useGetDataQuery({
		module : `wp-json/wp/v2/photobook/${photoBookId === "" ? null : photoBookId}`,
	});

	const [dataMutation, dataMutationResult] = genericApi.useSubmitDataMutation();

	const parseSendData = (data) => {
		const myData = data;
		const stringData = JSON.stringify(myData);
		const myReplacerString = stringData.replace(/"/g, "'");
		return myReplacerString;
	};

	const submitData = async () => {
		await dataMutation({
			module : "wp-json/wp/v2/photobook",
			data   : {
				tittle : "Texto de prueba",
				status : "publish",
				meta   : {
					config : parseSendData(workSpaceData),
				},
			},
			id     : photoBookId,
			method : "POST",
		});
	};


	useEffect(() => {
		if (photobookData?.meta?.config) {
			const myData = photobookData?.meta?.config;
			const myReplacerString = myData.replace(/'/g, "\"");
			const parseJSON = JSON.parse(myReplacerString);
			dispatch(workSpaceSlice.actions.insertData({...parseJSON, modified : photobookData?.modified ?? undefined}));
		}
	}, [photobookData]);

	useEffect(() => {
		if (!error) {
			dispatch(workSpaceSlice.actions.changeLoading(isFetching));
		}
	}, [isFetching]);


	useEffect(() => {
		if (photobookData?.meta?.config) {
			submitData();
		}
		if (!initialData) {
			if (photobookData?.meta?.config) {
				const myData = photobookData?.meta?.config;
				const myReplacerString = myData.replace(/'/g, "\"");
				const parseJSON = JSON.parse(myReplacerString);
				dispatch(workSpaceSlice.actions.addInitialData(parseJSON));
			}
		}
	}, [workSpaceData]);

	useEffect(() => {
		if (dataMutationResult.isUninitialized) return;

		// if (dataMutationResult.isLoading) {
		// 	PostingConfig["post"]["posting"]();
		// }

		if (dataMutationResult.isError) {
			const status = dataMutationResult.error?.status;

			switch (status) {
				case 403:
					PostingConfig["post"][403]();
					dispatch(authSlice.actions.clearUserData());
					break;
				default:
					PostingConfig["post"][500]();
					break;
			}
		}

		// if (dataMutationResult.status === "fulfilled") {
		// 	PostingConfig["post"][200]();
		// }

	}, [dataMutationResult]);

	return (
		<div
			id="AppShell"
			{
				...(isSelectedPage && {
					onClick : () => dispatch(workSpaceSlice.actions.clearSelectedPageData()),
				})
			}
		>
			<div className="bodyContainer">
				<Body />
			</div>
			<div className="shell-container">
				<div className="header-container">
					{header}
				</div>
				<div className="footer-and-nav-grouped">
					<div className="nav-menu">
						{navbar}
					</div>
					<div className="footer-nav">
						{footer}
					</div>
					<div>
						{sidebar}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppShell;
