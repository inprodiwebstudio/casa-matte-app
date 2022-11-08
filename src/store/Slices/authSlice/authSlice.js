import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token    : "",
	loggedIn : false,
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
