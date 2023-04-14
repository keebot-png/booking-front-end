import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axiosConfig';

export const addReservations = createAsyncThunk(
  'reservations/addReservations',
  async (reservation) => {
    const response = await axiosInstance.post('/api/v1/reservations', reservation);
    return response.data;
  },
);

export const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async () => {
    const response = await axiosInstance.get('/api/v1/reservations');
    return response.data;
  },
);

export const deleteReservations = createAsyncThunk(
  'reservations/deleteReservations',
  async (reservation) => {
    await axiosInstance.delete(`/api/v1/reservations/${reservation}`);
    return reservation;

  },
);
