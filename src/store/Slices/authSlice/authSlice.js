import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token    : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3RlbXBvcmFsLmNhc2FtYXR0ZS5jb20iLCJpYXQiOjE2Nzk0MTg0NDUsIm5iZiI6MTY3OTQxODQ0NSwiZXhwIjoxNjgwMDIzMjQ1LCJkYXRhIjp7InVzZXIiOnsiaWQiOiI1In19fQ.Vr-mAJxaTGPaVqMeaEqT5uiUsivBZ2PW8yg1DZkDZFg",
	loggedIn : true,
	user     : {
		username : "JoabMedel",
	},
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
