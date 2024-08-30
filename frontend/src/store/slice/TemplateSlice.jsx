import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

export const handleFetchTemplates = createAsyncThunk(
  'templates',
  async () => {
    try {
      const response = await axios.get('/api/templates');
      return response.data;
    } catch (error) {
      console.error('Error fetching templates list:', error);
      throw error; 
    }
  }
);



const templatesSlice = createSlice({
  name: 'templates',
  initialState,
  reducers: {
    setTemplates:(state,action)=>{
      state.data=action.payload;
    }
  }, 
  extraReducers: (builder) => {
    builder
      .addCase(handleFetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(handleFetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(handleFetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default templatesSlice.reducer;
export const {setTemplates} = templatesSlice.actions