import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import reservationReducer from './features/reservations/reservationSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    reservations: reservationReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
