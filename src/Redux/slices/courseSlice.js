// local
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

export const fetchEnrolledCourses = createAsyncThunk(
  'courses/fetchEnrolledCourses', async (accessToken) => {
    const response = await axios.get(`${apiUrl}/api/enroll/`,{
        headers: {
            Authorization: `JWT ${accessToken}`,
          },
    });
    return response.data;
  }
);

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    enrolledCourses: [],
    status: 'idle', 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEnrolledCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEnrolledCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.enrolledCourses = action.payload;
      })
      .addCase(fetchEnrolledCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default coursesSlice.reducer;
