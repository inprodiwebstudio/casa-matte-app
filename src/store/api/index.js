import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

// Import Own Components
import { apiUrl } from "helpers";

// Injects token in every request
const baseQuery = fetchBaseQuery({
	baseUrl        : apiUrl,
	prepareHeaders : (headers) => {
		const userName = "adminapp";
		const applicationPassword = "QkUi tQZW TIET 12f3 zYQI WJrs";

		const toBase64 = (str) => {
			const encoder = new TextEncoder();
			const data = encoder.encode(str);
			let binary = "";
			data.forEach((byte) => binary += String.fromCharCode(byte));
			return window.btoa(binary);
		};

		const token = toBase64(`${userName}:${applicationPassword}`);

		headers.set("authorization", `Basic ${token}`);
		headers.set("Accept", "/");
		headers.set("Access-Control-Allow-Origin", "*");
		headers.set("Access-Control-Allow-Methods", "*");
		return headers;
	},
},);

// Logs the user out if token isn't valid or postId isn't valid
const baseQueryWithReauth = async (args, api, extraOptions) => {
	const result = await baseQuery(args, api, extraOptions);

	return result;
};

// Retry at most 6 times.
const baseQueryWithRetry = retry(baseQueryWithReauth, { maxRetries : 1 });

export const api = createApi({
	reducerPath       : "api",
	baseQuery         : baseQueryWithRetry,
	keepUnusedDataFor : 3600,
	tagTypes          : ["gallerySlice", "media"],
	endpoints         : () => ({}),
});
