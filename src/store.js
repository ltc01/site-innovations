// src/store.js
import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./redux/user/userSlice.js";
import userReducer from "./Redux/user/userSlice";
import orderReducer from './Redux/slices/orderSlice'
import courseReducer from "./Redux/slices/courseSlice";
import courseDetailReducer from "./Redux/slices/courseDetailSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    orders: orderReducer,
    courses: courseReducer,
    courseDetails: courseDetailReducer,
  },
});

export default store;
