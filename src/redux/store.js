import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./features/studentSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  student: studentReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
    reducer: persistedReducer,
});
