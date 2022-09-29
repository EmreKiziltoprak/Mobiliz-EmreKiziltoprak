import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import { userSlice } from "./features/UserSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath] : apiSlice.reducer,
    userSlice: userSlice.reducer,
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});
