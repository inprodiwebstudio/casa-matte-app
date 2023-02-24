import qs from "qs";

// Import Own Components
// import { buildFormData } from "helpers";
import { api } from ".";

export const genericApi = api.injectEndpoints({
	endpoints : builder => ({
		getData : builder.query({
			query        : ({module, params, id}) =>  !id ? `${module}/?${qs.stringify(params)}` : `${module}/${id}?${qs.stringify(params)}`,
			providesTags : (result, error, arg) => arg?.tags ? [...arg.tags] : [arg.module],
		}),
		submitData : builder.mutation({
			query({module, data, method = "POST", id}) {
				const body = data;
				return {
					url    : id ? `${module}/${id}` : module,
					method : method,
					body,
				};
			},

			invalidatesTags : (result, error, arg) => arg?.tags ? [...arg.tags] : [`${arg.module}`],

			extraOptions : { maxRetries : 1 },
		}),
		patchData : builder.mutation({
			query({ module }) {
				return {
					url    : module,
					method : "PATCH",
				};
			},

			invalidatesTags : (result, error, arg) => arg?.tags ? [...arg.tags] : [`${arg.module}`],

			extraOptions : { maxRetries : 0 },
		}),
		delete : builder.mutation({
			query({ module }) {
				return {
					url    : module,
					method : "DELETE",
				};
			},

			invalidatesTags : (result, error, arg) => arg?.tags ? [...arg.tags] : [`${arg.module}`],

			extraOptions : { maxRetries : 0 },
		}),
	}),
});
