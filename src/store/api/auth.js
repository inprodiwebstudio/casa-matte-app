import { api } from ".";

export const authApi = api.injectEndpoints({
	endpoints : builder => ({
		login : builder.mutation({
			query : credentials => ({
				url    : "auth/login",
				method : "POST",
				body   : credentials,
			}),
			extraOptions : { maxRetries : 0 },
		}),
	}),
});
