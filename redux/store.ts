import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  REHYDRATE,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import rootReducer from "./reducers";

//Configure Persist
const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["user"], //blacklisting a store attribute name, will not persist that store attribute.
  throttle: 500,
  version: 1,
};

//Add persist for all reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

//Configure Store
const store = configureStore({
  //Init Reducer in store
  reducer: persistedReducer,
  //Configure by Default Middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // .concat(logger),
});

export default store;
export const persistor = persistStore(store);
