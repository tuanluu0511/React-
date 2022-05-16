import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { items: [], quantity: 0, total: 0, changed: false };

const cartSlice = createSlice({
  name: 'product',
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.quantity = action.payload.quantity;
      state.items = action.payload.items;
      state.total = action.payload.total;
    },
    addToCart(state, action) {
      state.changed = true;
      state.total = state.total + action.payload.quantity * action.payload.price;
      state.quantity = state.quantity + action.payload.quantity;

      const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      const existingItem = state.items[existingItemIndex];

      if (existingItem) {
        existingItem.quantity++;
        existingItem.total = existingItem.total + existingItem.price;
      } else {
        // can use push method because redux toolkit make sure it won't manipulate the current state
        state.items = state.items.concat(action.payload);
      }
    },
    removeItem(state, action) {
      state.total = state.total - action.payload.price;
      state.quantity = state.quantity - action.payload.quantity;
      state.change = true;
      const existingCartItemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      const existingItem = state.items[existingCartItemIndex];

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      } else {
        existingItem.quantity = existingItem.quantity - action.payload.quantity;
        existingItem.total = existingItem.total - existingItem.price;
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
