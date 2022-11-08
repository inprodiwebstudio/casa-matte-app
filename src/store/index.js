// import "regenerator-runtime/runtime"; Uncomment this line if bugs appear.
import localForage                      from "localforage";
import { configureStore }               from "@reduxjs/toolkit";
import { setupListeners }               from "@reduxjs/toolkit/query";
import { combineReducers }              from "redux";
import { persistStore, persistReducer } from "redux-persist";

// Import Own Components
import { api }     from "./api";
import * as Slices from "./Slices";

const rootReducer    = combineReducers({
	...Object.entries(Slices).reduce(
		(acc, [key, value]) => ({
			...acc,
			[key] : value.reducer,
		}),
		{}
	),
	[api.reducerPath] : api.reducer,
});


const persistConfig = {
	key       : "root",
	storage   : localForage,
	whitelist : [
		"authSlice",
	],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer    : persistedReducer,
	devTools   : import.meta.env.DEV !== "production",
	middleware : (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export default store;
