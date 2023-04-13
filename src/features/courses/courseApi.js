import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axiosConfig';

  export const getCourses = createAsyncThunk(
    'courses/fetchCourses',
    async () => {
      const response = await axiosInstance.get('http://127.0.0.1:3000/api/v1/courses/');
      return response.data;
    },
  );
  

  export default getCourses;