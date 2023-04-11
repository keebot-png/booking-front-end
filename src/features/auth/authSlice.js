import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from './authApi';

export const registerUserAsync = createAsyncThunk(
  'auth/registerUser',
  async (data) => {
    const response = await authApi.registerUser(data);
    const authToken = response.headers.authorization;
    window.localStorage.setItem('authToken', authToken);

    // The value we return becomes the `fulfilled` action payload
    return authToken;
  },
);

export const loginUserAsync = createAsyncThunk(
  'auth/loginUser',
  async (data) => {
    const response = await authApi.loginUser(data);
    const authToken = response.headers.authorization;
    window.localStorage.setItem('authToken', authToken);

    // The value we return becomes the `fulfilled` action payload
    return authToken;
  },
);

export const signOutUserAsync = createAsyncThunk(
  'auth/signOutUser',
  async () => {
    await authApi.signOutUser();
    window.localStorage.removeItem('authToken');

    // The value we return becomes the `fulfilled` action payload
  },
);

const initialState = {
  error: null,
  isLoading: false,
  token: window.localStorage.getItem('authToken'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateStatus: (state, action) => {
      state.status = action.payload.status;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload;
      })
      .addCase(registerUserAsync.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(loginUserAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload;
      })
      .addCase(loginUserAsync.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(signOutUserAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signOutUserAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.token = null;
      });
  },
});

export const { updateStatus } = authSlice.actions;

export default authSlice.reducer;
