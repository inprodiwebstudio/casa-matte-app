import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token    : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3RlbXBvcmFsLmNhc2FtYXR0ZS5jb20iLCJpYXQiOjE2NzE0NzIyMTQsIm5iZiI6MTY3MTQ3MjIxNCwiZXhwIjoxNjcyMDc3MDE0LCJkYXRhIjp7InVzZXIiOnsiaWQiOjUsImRldmljZSI6IiIsInBhc3MiOiI0OTMxNTFlOGQyZmUwZjNlYmU1ZDUyNWVlOWI4YzhjOCJ9fX0.QyKW_B2f_kmwZlhOHQq9ADKx03pNdom4Ya1vWslZJ5I",
	loggedIn : true,
	user     : {},
};

export const authSlice = createSlice({
	name     : "auth",
	initialState,
	reducers : {
		setUserData : (state, action) => {
			state.token    = action.payload.token;
			state.user     = action.payload.user;
			state.loggedIn = true;
		},
		clearUserData : () => initialState,
	},
});

// Action creators are generated for each case reducer function
export const { setUserData, clearUserData } = authSlice.actions;
