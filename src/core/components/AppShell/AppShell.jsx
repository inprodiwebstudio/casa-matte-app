import { connect }   from "react-redux";
import { useEffect } from "react";
import { Font }      from "@react-pdf/renderer";

//Own component;
import { bindAll }        from "helpers";
import { PostingConfig }  from "Notifications";
import { genericApi }     from "store/api/genericApi";
import { workSpaceSlice } from "store/Slices";
import "./AppShell.scss";
//Fonts
import blackaHollow from "Resources/Fonts/BlakaHollow-Regular.ttf";


const AppShell = ({
	Body,
	header,
	navbar,
	footer,
	sidebar,
	initialData,
	photoBookId,
	workSpaceData,
	workSpaceSlice,
	isSelectedPage,
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
			workSpaceSlice.insertData(parseJSON);
		}
	}, [photobookData]);

	useEffect(() => {
		if (!error) {
			workSpaceSlice.changeLoading(isFetching);
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
				workSpaceSlice.addInitialData(parseJSON);
			}
		}
	}, [workSpaceData]);

	useEffect(() => {
		if (dataMutationResult.isUninitialized) return;

		if (dataMutationResult.isLoading) {
			PostingConfig["post"]["posting"]();
		}

		if (dataMutationResult.isError) {
			const status = dataMutationResult.error?.status;

			switch (status) {
				case 500:
					PostingConfig["post"][500]();
					break;
				default:
					PostingConfig["post"][500]();
					break;
			}
		}

		if (dataMutationResult.data) {
			PostingConfig["post"]["200"]();
		}

	}, [dataMutationResult]);


	return (
		<div
			id="AppShell"
			{
				...(isSelectedPage && {
					onClick : () => workSpaceSlice.clearSelectedPageData(),
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

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

const mapStateToProps = ({ workSpaceSlice, authSlice }) => ({
	isSelectedPage : workSpaceSlice?.pageDataSelected ?? null,
	workSpaceData  : workSpaceSlice?.data ?? {},
	photoBookId    : authSlice?.user?.photoBookId ?? null,
	initialData    : workSpaceSlice?.initialData ?? undefined,
});

export default connect(mapStateToProps, mapDispatchToProps) (AppShell);
