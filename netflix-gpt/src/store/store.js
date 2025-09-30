import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";

const store = configureStore({
  reducer: {
    userSlice: userSlice,
    // Add your reducers here
    // e.g., user: userReducer,
  },
});

export default store;