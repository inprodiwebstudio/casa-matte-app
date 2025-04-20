
import { genericApi } from "store/api/genericApi";
import LoadingAccess  from "./LoadingAccess";

import Dashboard from "core/layout";

import { Navigate, useNavigate, useParams } from "react-router";
import { useEffect }                        from "react";
import { useSelector, shallowEqual }        from "react-redux";
import { usePhotoBookPreset }               from "helpers/Hooks/usePhotoBookPreset";

const CorrectAccessGuard = () => {
	const { createPresetPhotoBook } = usePhotoBookPreset();
	const userId = useSelector((state) => state.authSlice.user.userId, shallowEqual);

	const { postId } = useParams();

	const navigate = useNavigate();

	if (!postId) {
		return <Navigate to="/error/404" replace />;
	}

	const { data : photobookData, error, isFetching } = genericApi.useGetDataQuery({
		module : `wp-json/wp/v2/photobook-2-0/${postId}`,
	});

	const isLoading = isFetching && !photobookData;

	const handlerPhotoBookNotFound = () => {
		if (error?.status === 404) {
			navigate("/error/404");
		}
		if (error?.status === 500) {
			navigate("/error/500");
		}
	};

	const isOwner = () => {
		if (photobookData?.author === userId) return true;
		return false;
	};

	useEffect(() => {
		handlerPhotoBookNotFound();
	}, [error]);

	useEffect(() => {
		if (!photobookData) return;
		if (!isOwner()) {
			return navigate("/error/403");
		}
		createPresetPhotoBook(photobookData);
	}, [photobookData]);

	return (
		<>
			{
				isLoading ?
					<LoadingAccess />
					: (
						<Dashboard />
					)
			}
		</>
	);
};

export default CorrectAccessGuard;
