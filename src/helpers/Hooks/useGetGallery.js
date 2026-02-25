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
	const galleryPath = useSelector((state) => state.gallerySlice.galleryPathName, shallowEqual);
	const nextCursor = useSelector((state) => state.gallerySlice?.nextCursor, shallowEqual);
	const filter = useSelector((state) => state.gallerySlice.filter, shallowEqual);


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

			dispatch(gallerySlice.actions.getGalleryData(resp.data?.resources ?? []));
			if (resp.data?.nextCursor) {
				dispatch(gallerySlice.actions.setNextCursor(resp.data?.nextCursor));
			}
			dispatch(gallerySlice.actions.setLoadingGalleryData(false));
		} catch (error) {
			console.error(error);
			dispatch(gallerySlice.actions.setLoadingGalleryData(false));
			throw error;
		}
	}, [dispatch, userName, postId, galleryPath, filter, nextCursor]);

	return {
		handlerGetGallery,
	};
};

export default useGetGallery;
