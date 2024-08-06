import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loggedIn: false
  },
  reducers: {
    changeLogginStatus: (state, action) => {
      state.loggedIn = action.payload; // Update loggedIn directly with action.payload
    }
  }
});

// Action creators are generated for each case reducer function
export const { changeLogginStatus } = loginSlice.actions;

export default loginSlice.reducer;
