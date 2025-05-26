import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: []
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
        state.cartItems.push("abc");
      
    },
    removeFromCart(state, action) {
      const id = action.payload;
     state.cartItems.pop();
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;