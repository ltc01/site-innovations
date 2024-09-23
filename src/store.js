// src/store.js
import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./redux/user/userSlice.js";
import userReducer from "./Redux/user/userSlice";
import orderReducer from './redux/slices/orderSlice'
import courseReducer from "./redux/slices/courseSlice";
import courseDetailReducer from "./redux/slices/courseDetailSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    orders: orderReducer,
    courses: courseReducer,
    courseDetails: courseDetailReducer,
  },
});

export default store;
