// local
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

export const fetchCourseDetails = createAsyncThunk(
  'courseDetails/fetchCourseDetails',
  async (courseId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiUrl}/api/courses/${courseId}/`);
      console.log(response, 'response slice')
      return response.data;
    } catch (error) {
    console.log(error.data)
      return rejectWithValue(error.response.data);
    }
  }
);

const courseDetailSlice = createSlice({
  name: 'courseDetails',
  initialState: {
    course: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourseDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourseDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.course = action.payload;
      })
      .addCase(fetchCourseDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default courseDetailSlice.reducer;
