import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token    : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3RlbXBvcmFsLmNhc2FtYXR0ZS5jb20iLCJpYXQiOjE2NzIyNDcxNjksIm5iZiI6MTY3MjI0NzE2OSwiZXhwIjoxNjcyODUxOTY5LCJkYXRhIjp7InVzZXIiOnsiaWQiOiI1In19fQ.r6RGKtgt1p_QXZ8Avfein_mS_Qc1J7DsNk4SZ16aHBg",
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
