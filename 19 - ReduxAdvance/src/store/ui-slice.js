import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { showCart: false },
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const uiAction = uiSlice.actions;

export default uiSlice.reducer;
