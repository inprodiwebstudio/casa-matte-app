import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

// Import Own Components
import { apiUrl }    from "helpers";
import { authSlice } from "store/Slices/authSlice";

// Injects token in every request
const baseQuery = fetchBaseQuery({
	baseUrl        : apiUrl,
	prepareHeaders : (headers, { getState }) => {
		const { token } = getState().authSlice;

		if (token) {
			headers.set("authorization", `Bearer ${token}`);
		}

		headers.set("Accept", "/");
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

export const api = createApi({
	reducerPath       : "api",
	baseQuery         : baseQueryWithRetry,
	keepUnusedDataFor : 3600,
	tagTypes          : ["gallerySlice", "media"],
	endpoints         : () => ({}),
});
