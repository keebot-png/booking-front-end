//  import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axiosInstance from "../../axiosConfig";
 import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    reservations: [
      {
        "date": "11/03/2023",
        "time": "11:00am",
        "course_name": "React.js",
        "teacher_name": "Wesley"
      },

      {
        "date": "17/03/2023",
        "time": "11:00am",
        "course_name": "Node.js",
        "teacher_name": "Shaddai"
      }

    ],
    // isLoading: false,
    // error: ''
}

// export const fetchReservations = createAsyncThunk(
//     'reservations/fetchReservations',
//     async({ course_id, teacher_id }) => {
//         const response = await axiosInstance.get(`/api/v1/courses/${course_id}/teachers/${teacher_id}/reservations`);
//         return response.data;
//     }
// );

// export const addReservations = createAsyncThunk(
//     'reservations/addReservations',
//     async(reservation) =>{
//         const { course_id, teacher_id } = reservation;
//         const response = await axiosInstance.post(`/api/v1/courses/${course_id}/teachers/${teacher_id}/reservations`, reservation);
//         return response.data;
//     }
// );

// export const deleteReservations = createAsyncThunk(
//     'reservations/deleteReservations',
//     async(reservation) =>{
//         const { course_id, teacher_id, id } = reservation;
//         const response = await axiosInstance.delete(`/api/v1/courses/${course_id}/teachers/${teacher_id}/reservations/${id}`);
//         return { id: id };
//     }
// );

const reservationSlice = createSlice({
    name: 'reservations',
    initialState,
    reducers: {}
    // extraReducers: (builder) => {
    //     builder
    //     .addCase(fetchReservations.pending, (state) => {
    //         state.isLoading = true;
    //       })
    //       .addCase(fetchReservations.fulfilled, (state, action) => {
    //         state.isLoading = false;
    //         state.reservations = action.payload;
    //       })
    //       .addCase(fetchReservations.rejected, (state, action) => {
    //         state.isLoading = false;
    //         state.error = action.error.message;
    //       })
    //       .addCase(addReservations.pending, (state) => {
    //         state.isLoading = true;
    //       })
    //       .addCase(addReservations.fulfilled, (state, action) => {
    //         state.isLoading = false;
    //         state.reservations = [...state.reservations, action.payload];
    //       })
    //       .addCase(addReservations.rejected, (state, action) => {
    //         state.isLoading = false;
    //         state.error = action.error.message;
    //       })
    //       .addCase(deleteReservations.pending, (state) => {
    //         state.isLoading = true;
    //       })
    //       .addCase(deleteReservations.fulfilled, (state, action) => {
    //         state.isLoading = false;
    //         state.reservations = state.reservations.filter(
    //           (reservation) => reservation.id !== action.payload
    //         );
    //       })
    //       .addCase(deleteReservations.rejected, (state, action) => {
    //         state.isLoading = false;
    //         state.error = action.error.message;
    //       });
    // }
})

export default reservationSlice.reducer;