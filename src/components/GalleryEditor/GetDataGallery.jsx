import { useEffect }                              from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useParams }                              from "react-router";

//Own Components
import LoadingGallery    from "./LoadingGallery";
import ErrorView         from "./ErrorView";
import GalleryEditorView from "./GalleryEditorView";

//Slices
import { gallerySlice } from "store/Slices";

//Fetch Slices Api
import { apiImageKit } from "store/api/imageKitApi";
import PhotosInFolder  from "./PhotosInFolder";

const { useLazyGetDirentsListQuery } = apiImageKit;

const GetDataGallery = () => {
	const dispatch = useDispatch();
	const [ fetchGallery, { error } ] = useLazyGetDirentsListQuery();

	const typeViewList = useSelector((state) => state.gallerySlice?.typeViewList, shallowEqual);
	const galleryPath = useSelector((state) => state.gallerySlice.galleryPathName, shallowEqual);
	const filter = useSelector((state) => state.gallerySlice.filter, shallowEqual);
	const isLoading = useSelector((state) => state.gallerySlice.isLoadingData, shallowEqual);
	const userName = useSelector((state) => state.authSlice?.user?.username, shallowEqual);
	const isLoggedIn = useSelector((state) => state.authSlice?.loggedIn, shallowEqual);
	const { postId } = useParams();

	const handlerGetGallery = async () => {
		dispatch(gallerySlice.actions.setLoadingGalleryData(true));
		try {
			const resp = await fetchGallery({
				params : {
					limit      : 500,
					userName   : `${userName}/${postId}`,
					folderName : (galleryPath?.name === "route") ? null : galleryPath?.name,
					...((filter && (filter?.value !== "DESC_CAPTURE")) ? {sort : filter?.value} : {}),
				},
			});
			dispatch(gallerySlice.actions.getGalleryData(resp.data));
			dispatch(gallerySlice.actions.setLoadingGalleryData(false));
		} catch (error) {
			console.error(error);
			dispatch(gallerySlice.actions.setLoadingGalleryData(false));
		}
	};

	useEffect(() => {
		if (isLoggedIn) {
			handlerGetGallery();
		}
		return;
	}, [filter, isLoggedIn, galleryPath]);

	if (isLoading) {
		return (
			<LoadingGallery />
		);
	}

	if (error) {
		return (
			<ErrorView />
		);
	}

	if (typeViewList === "photosInFolder") {
		return (
			<PhotosInFolder />
		);
	}

	return (
		<GalleryEditorView />
	);
};

export default GetDataGallery;
