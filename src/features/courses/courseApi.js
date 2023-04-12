import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axiosConfig';

// const getCourses = createAsyncThunk('booking-front-end/getCourses', async () => {
//     const response = await fetch("http://127.0.0.1:3000/api/v1/courses/");
//     const jsonData = await response.json();
//     return jsonData;
// });

  // async function logJSONData() {
  //   const response = await fetch("http://127.0.0.1:3000/api/v1/courses/");
  //   const jsonData = await response.json();
  //   console.log(jsonData);
  // }

  // logJSONData()
  

  export const getCourses = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
      const response = await fetch('http://127.0.0.1:3000/api/v1/courses/');
      return response.json();
    }
  );

  export default getCourses;