import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axiosConfig';

const addReservations = createAsyncThunk(
  'reservations/addReservations',
  async (reservation) => {
    const { course_id, teacher_id } = reservation;
    const response = await axiosInstance.post(`/api/v1/courses/${course_id}/teachers/${teacher_id}/reservations`, reservation);
    return response.data;
  },
);

export default addReservations;
