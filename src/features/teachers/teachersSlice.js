// import { createSlice } from '@reduxjs/toolkit';
// import getTeachers from './teachersApi';

// const teachersSlice = createSlice({
//   name: 'teachers',
//   initialState: {
//     teachers: [],
//     status: 'idle',
//     error: null
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getTeachers.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(getTeachers.fulfilled, (state, action) => {
//         return {
//           ...state,
//           teachers: action.payload
//         }
//       })
//       .addCase(getTeachers.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   }
// });

// export default teachersSlice.reducer;
