import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token    : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3RlbXBvcmFsLmNhc2FtYXR0ZS5jb20iLCJpYXQiOjE2NzcwMTkwNjksIm5iZiI6MTY3NzAxOTA2OSwiZXhwIjoxNjc3NjIzODY5LCJkYXRhIjp7InVzZXIiOnsiaWQiOiI1In19fQ.9_aMEw6cU3VyfJR2eQWLWaaJhIvY0tZ12jDlDMZck6o",
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
