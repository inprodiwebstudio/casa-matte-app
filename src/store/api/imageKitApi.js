import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { galleryApiUrl }                    from "helpers";
import qs                                   from "qs";


// Import Own Components
import { authSlice } from "store/Slices/authSlice";

// Injects token in every request
const baseQuery = fetchBaseQuery({
	baseUrl        : galleryApiUrl,
	prepareHeaders : (headers) => {
		headers.set("Access-Control-Allow-Origin", "*");
		headers.set("Access-Control-Allow-Methods", "*");
		return headers;
	},
});
// Logs the user out if token isn't valid
const baseQueryWithReauth = async (args, api, extraOptions) => {
	const result = await baseQuery(args, api, extraOptions);

	if (result.error && result.error.status === 401) {
		api.dispatch(authSlice.actions.clearUserData());
	}

	return result;
};

// Retry at most 6 times.
const baseQueryWithRetry = retry(baseQueryWithReauth, { maxRetries : 2 });

export const apiImageKit = createApi({
	reducerPath       : "apiImageKit",
	baseQuery         : baseQueryWithRetry,
	keepUnusedDataFor : 3600,
	tagTypes          : [],
	endpoints         : (builder) => ({
		getDirentsList : builder.query({
			query : ({params}) => `files/?${qs.stringify(params)}`,
		}),
	}),
});
