import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import courseRuducer from './features/courses/courseSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    courses: courseRuducer
  },
  devTools: process.env.NODE_ENV !== 'production',
});
