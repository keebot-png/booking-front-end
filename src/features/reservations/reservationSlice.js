//  import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axiosInstance from "../../axiosConfig";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reservations: [
    {
      id: '1',
      date: '11/03/2023',
      time: '11:00am',
      course_name: 'React.js',
      teacher_name: 'Wesley',
    },

    {
      id: '2',
      date: '17/03/2023',
      time: '11:00am',
      course_name: 'Node.js',
      teacher_name: 'Shaddai',
    },
  ],
  // isLoading: false,
  // error: ''
};

const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
});

export default reservationSlice.reducer;
