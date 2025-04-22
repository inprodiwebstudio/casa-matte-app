import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	loggedIn : false,
	user     : {
		username : "",
		userId   : "",
		email    : "",
	},
};

export const authSlice = createSlice({
	name     : "auth",
	initialState,
	reducers : {
		setUserData : (state, action) => {
			state.user = action.payload;
		},
		setUserId : (state, action) => {
			state.user.userId = action.payload;
		},
		updateEmail : (state, action) => {
			state.user.email = action.payload;
		},
		setIsLoggedIn : (state) => {
			state.loggedIn = true;
		},
		clearUserData : () => initialState,
	},
});

// Action creators are generated for each case reducer function
export const { setUserData, clearUserData } = authSlice.actions;
