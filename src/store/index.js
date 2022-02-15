import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import devicesReducer from "./slices/devices";
import coreReducer from "./slices/core";

// Persistent Configuration
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["devices", "core"],
};

// Reducers
const reducers = combineReducers({
  devices: devicesReducer,
  core: coreReducer,
});

// Applying Persistence using Reducers
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    root: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persist = persistStore(store);
