// import "regenerator-runtime/runtime"; Uncomment this line if bugs appear.
// import localForage                      from "localforage";
import sessionStorage                   from "redux-persist/lib/storage/session";
import { configureStore }               from "@reduxjs/toolkit";
import { setupListeners }               from "@reduxjs/toolkit/query";
import { combineReducers }              from "redux";
import { persistStore, persistReducer } from "redux-persist";

// Import Own Components
import { api }         from "./api";
import { apiImageKit } from "./api/imageKitApi";
import * as Slices     from "./Slices";

const rootReducer    = combineReducers({
	...Object.entries(Slices).reduce(
		(acc, [key, value]) => ({
			...acc,
			[key] : value.reducer,
		}),
		{}
	),
	[api.reducerPath]         : api.reducer,
	[apiImageKit.reducerPath] : apiImageKit.reducer,
});


const persistConfig = {
	key       : "root",
	storage   : sessionStorage,
	whitelist : [
		"authSlice",
		"workSpaceSlice",
	],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer    : persistedReducer,
	devTools   : import.meta.env.DEV !== "production",
	middleware : (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([
			api.middleware,
			apiImageKit.middleware,
		]),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export default store;
