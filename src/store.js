import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import courseRuducer from './features/courses/courseSlice';
import reservationReducer from './features/reservations/reservationSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    courses: courseRuducer,
    reservations: reservationReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
