import convertToArray                             from "helpers/convertToArray";
import { useCallback }                            from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { useParams }                              from "react-router";
import { gallerySlice }                           from "store/Slices";
import { apiImageKit }                            from "store/api/imageKitApi";

const { useLazyGetDirentsListQuery } = apiImageKit;

const useGetGallery = (hasGetNextCursor = false) => {
	const [fetchGallery] = useLazyGetDirentsListQuery();

	const dispatch = useDispatch();

	const { postId } = useParams();

	const userName = useSelector((state) => state.authSlice?.user?.username, shallowEqual);
	const assetsData = useSelector((state) => state.gallerySlice.data, shallowEqual);
	const galleryPath = useSelector((state) => state.gallerySlice.galleryPathName, shallowEqual);
	const nextCursor = useSelector((state) => state.gallerySlice?.nextCursor, shallowEqual);
	const filter = useSelector((state) => state.gallerySlice.filter, shallowEqual);

	const currentImages = convertToArray(assetsData);

	const handlerGetGallery = useCallback(async () => {
		dispatch(gallerySlice.actions.setLoadingGalleryData(true));
		try {
			const resp = await fetchGallery({
				params : {
					limit      : 500,
					userName   : `${userName}/${postId}`,
					folderName : (galleryPath?.name === "route") ? null : galleryPath?.name,
					nextCursor : (hasGetNextCursor && nextCursor) ? nextCursor : null,
				},
			});

			if (resp.error) {
				throw resp.error;
			}

			let listOfAssets = [...resp.data.resources ?? []];

			if (hasGetNextCursor && nextCursor) {
				listOfAssets = [...currentImages, ...resp.data.resources];
			}

			if (filter.value === "CAPTURE_DATE") {
				listOfAssets = listOfAssets.sort((a, b) => new Date(b?.context?.dateCaptured) - new Date(a?.context?.dateCaptured));
			}
			dispatch(gallerySlice.actions.getGalleryData(listOfAssets ?? []));
			dispatch(gallerySlice.actions.setNextCursor(resp.data?.nextCursor ?? ""));
			dispatch(gallerySlice.actions.setLoadingGalleryData(false));
		} catch (error) {
			dispatch(gallerySlice.actions.setLoadingGalleryData(false));
			throw error;
		}
	}, [dispatch, userName, postId, galleryPath, filter, nextCursor]);

	return {
		handlerGetGallery,
	};
};

export default useGetGallery;
