import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axiosConfig';

const getTeachers = createAsyncThunk('courses/fetchCourses',
  async (courseId) => {
    const response = await axiosInstance.get(`http://127.0.0.1:3000/api/v1/courses/${courseId}/teachers`);
    const data = await response.data;
    return data;
  });

export default getTeachers;
