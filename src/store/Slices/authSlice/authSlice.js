import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token    : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3RlbXBvcmFsLmNhc2FtYXR0ZS5jb20iLCJpYXQiOjE2NzI4NjA5MzMsIm5iZiI6MTY3Mjg2MDkzMywiZXhwIjoxNjczNDY1NzMzLCJkYXRhIjp7InVzZXIiOnsiaWQiOiI1In19fQ.4cDR1OTZXKwWD2Rns4KrX9wPhiBwZx1PlcYY22O3q4U",
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
