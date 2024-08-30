import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from '../../apiClient'; 
import axios from "axios";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  loading: false,
  error: null,
};

// Async thunk for user signup
export const signupUser = createAsyncThunk(
  'user/signup',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/api/users/signup', { email, password });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || 'Signup failed');
      }
      return rejectWithValue('Signup failed'); 
    }
  }
);

// User slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSignIn: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    userSignOut: (state) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        localStorage.setItem('userInfo', JSON.stringify(action.payload));
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      });
  },
});

// Export actions and reducer
export const { userSignIn, userSignOut } = userSlice.actions;
export default userSlice.reducer;
