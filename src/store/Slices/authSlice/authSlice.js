import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token    : "",
	loggedIn : false,
	user     : {
		username : "",
		email    : "",
		name     : "",
		postId   : "",
		userId   : "",
	},
};

export const authSlice = createSlice({
	name     : "auth",
	initialState,
	reducers : {
		setUserData : (state, action) => {
			state.token         = action.payload.token;
			state.user.email    = action.payload.user_email;
			state.user.username = action.payload.user_nicename;
			state.user.name     = action.payload.user_display_name;
			state.user.postId = action.payload.postId;
		},
		setUserId : (state, action) => {
			state.user.userId = action.payload;
		},
		setIsLoggedIn : (state) => {
			state.loggedIn = true;
		},
		clearUserData : () => initialState,
	},
});

// Action creators are generated for each case reducer function
export const { setUserData, clearUserData } = authSlice.actions;
