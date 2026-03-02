import { useEffect, useState }       from "react";
import { useSelector, shallowEqual } from "react-redux";

//Own Components
import LoadingGallery    from "./LoadingGallery";
import ErrorView         from "./ErrorView";
import GalleryEditorView from "./GalleryEditorView";

//Fetch Slices Api
import PhotosInFolder from "./PhotosInFolder";
import useGetGallery  from "helpers/Hooks/useGetGallery";

const GetDataGallery = () => {
	const [error, setError] = useState(null);
	const typeViewList = useSelector((state) => state.gallerySlice?.typeViewList, shallowEqual);
	const galleryPath = useSelector((state) => state.gallerySlice.galleryPathName, shallowEqual);
	const filter = useSelector((state) => state.gallerySlice.filter, shallowEqual);
	const isLoading = useSelector((state) => state.gallerySlice.isLoadingData, shallowEqual);
	const isLoggedIn = useSelector((state) => state.authSlice?.loggedIn, shallowEqual);

	const { handlerGetGallery } = useGetGallery();

	const getMyGallery = async () => {
		try {
			await handlerGetGallery();
		} catch (error) {
			setError(error);
		}
	};

	useEffect(() => {
		if (isLoggedIn) {
			getMyGallery();
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
