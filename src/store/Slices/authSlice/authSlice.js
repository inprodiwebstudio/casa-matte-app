import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token    : "",
	loggedIn : false,
	user     : {
		username : "",
		email    : "",
		name     : "",
		postId   : "",
	},
};

export const authSlice = createSlice({
	name     : "auth",
	initialState,
	reducers : {
		setUserData : (state, action) => {
			state.loggedIn = true;
			state.token         = action.payload.token;
			state.user.email    = action.payload.user_email;
			state.user.username = action.payload.user_nicename;
			state.user.name     = action.payload.user_display_name;
			state.user.postId = action.payload.postId;
		},
		clearUserData : () => initialState,
	},
});

// Action creators are generated for each case reducer function
export const { setUserData, clearUserData } = authSlice.actions;
