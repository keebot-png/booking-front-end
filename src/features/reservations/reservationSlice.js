//  import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axiosInstance from "../../axiosConfig";
import { createSlice } from '@reduxjs/toolkit';
import { deleteReservations, fetchReservations } from './reservationPost';

const initialState = {
  reservations: [],
  isLoading: false,
  error: '',
};

const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reservations = action.payload;
      })
      .addCase(fetchReservations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteReservations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteReservations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reservations = state.reservations.filter(
          (reservation) => reservation.id !== action.payload,
        );
      })
      .addCase(deleteReservations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default reservationSlice.reducer;
