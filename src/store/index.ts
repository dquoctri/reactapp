import thunk from "redux-thunk"
import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import rootReducer, { persistConfig } from "./reducers"
import logger from "./logger"

const isDevelopment = process.env.NODE_ENV === "development"
const middlewares = process.env.NODE_ENV === "development" ? [thunk, logger] : [thunk]

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  devTools: isDevelopment,
  middleware: middlewares
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
