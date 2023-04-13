import { createSlice } from '@reduxjs/toolkit';
import { getCourses } from './courseApi';

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCourses.fulfilled, (state, action) => ({
        ...state,
        courses: action.payload,
      }))
      .addCase(getCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default coursesSlice.reducer;
