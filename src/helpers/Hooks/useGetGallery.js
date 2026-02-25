import convertToArray                             from "helpers/convertToArray";
import isValidArray                               from "helpers/isValidArray";
import { useCallback }                            from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { useParams }                              from "react-router";
import { gallerySlice }                           from "store/Slices";
import { apiImageKit }                            from "store/api/imageKitApi";

const { useLazyGetDirentsListQuery } = apiImageKit;

const useGetGallery = () => {
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
					nextCursor : nextCursor,
					...((filter && (filter?.value !== "DESC_CAPTURE")) ? {sort : filter?.value} : {}),
				},
			});

			if (resp.error) {
				throw resp.error;
			}

			const listOfAssets = [...currentImages];

			const newListOfAssets = resp.data?.resources ?? [];

			if (isValidArray(newListOfAssets)) {
				newListOfAssets.forEach(asset => {
					const isAvailableAsset = listOfAssets.find(({asset_id}) => asset_id === asset.asset_id);
					if (!isAvailableAsset) {
						listOfAssets.push(asset);
					}
				});
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
