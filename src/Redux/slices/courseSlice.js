// local
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

// Async thunk to fetch enrollment list of courses ->
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

// Async thunk to fetch program list of courses ->
export const fetchProgramCourses = createAsyncThunk(
  'courses/fetchProgramCourses', 
  async () => {
    const response = await axios.get(`${apiUrl}/api/courses/?category=1`); 
    return response.data;
  }
);


// Async thunk to fetch program list of courses ->
export const fetchAllCourses = createAsyncThunk(
  'courses/fetchAllCourses', 
  async () => {
    const response = await axios.get(`${apiUrl}/api/categories/`); 
    console.log(response, 'response thunk')
    return response.data;
  }
);


const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    enrolledCourses: [],
    programCourses: [],
    allCourses: [],
    status: 'idle', 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {

    // Handle fetchEnrolledCourses 
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

      // Handle fetchProgramCourses
      builder
      .addCase(fetchProgramCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProgramCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.programCourses = action.payload;
      })
      .addCase(fetchProgramCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

      // Handle fetchAllCourses
      builder
      .addCase(fetchAllCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allCourses = action.payload;
      })
      .addCase(fetchAllCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

  },
});

export default coursesSlice.reducer;
