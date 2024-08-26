import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import qs                                   from "qs";


// Import Own Components
import { galleryApiUrl, buildFormData } from "helpers";
import { authSlice }                    from "store/Slices/authSlice";

// Injects token in every request
const baseQuery = fetchBaseQuery({
	baseUrl        : galleryApiUrl,
	prepareHeaders : (headers) => {
		headers.set("Access-Control-Allow-Origin", "*");
		headers.set("Access-Control-Allow-Methods", "*");
		// headers.set("Authorization", `Basic ${ btoa( "864322584227584" + ":" + "E8Hmvqo50hhgo-XAoZHdXTajh4c") }`);
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
	tagTypes          : ["gallery"],
	endpoints         : (builder) => ({
		getDirentsList : builder.query({
			query        : ({params}) => `files/?${qs.stringify(params)}`,
			providesTags : ["gallery"],
		}),
		deleteImages : builder.mutation({
			query({data}) {
				const body = data;
				return {
					url    : "delete",
					method : "POST",
					body,
				};
			},
			invalidatesTags : [],
		}),
		generateUrlCompress : builder.mutation({
			query({data}) {
				const body = data;
				return {
					url    : "urlimage",
					method : "POST",
					body,
				};
			},
			invalidatesTags : [],
		}),
		generateSign : builder.mutation({
			query({data}) {
				const body = data;
				return {
					url    : "sign",
					method : "POST",
					body,
				};
			},
			invalidatesTags : [],
		}),
		addFolder : builder.mutation({
			query({data, userName}) {
				const body = data;
				return {
					url    : `upload/folder/${userName}`,
					method : "POST",
					body,
				};
			},
			invalidatesTags : [],
		}),
		deleteFolder : builder.mutation({
			query({data, userName}) {
				const body = data;
				return {
					url    : `delete/folder/${userName}`,
					method : "POST",
					body,
				};
			},
			invalidatesTags : [],
		}),
		addImage : builder.mutation({
			query({data, userName}) {
				const body = buildFormData(data);
				return {
					url    : `upload/${userName}`,
					method : "POST",
					body,
				};
			},
			invalidatesTags : (result, error, arg) => arg?.tags ? [...arg.tags] : ["gallery"],
		}),
		addEditedImage : builder.mutation({
			query({data, userName}) {
				const body = buildFormData(data);
				return {
					url    : `upload/edited/${userName}`,
					method : "POST",
					body,
				};
			},
			invalidatesTags : [],
		}),
		moveFile : builder.mutation({
			query({sourceFilePath, destinationPath}) {
				return {
					url    : "move",
					method : "POST",
					body   : {
						sourceFilePath,
						destinationPath,
					},
				};
			},
			invalidatesTags : [],
		}),
	}),
});
