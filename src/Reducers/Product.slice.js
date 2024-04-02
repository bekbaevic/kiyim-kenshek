import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductToProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setProductToProduct } = productSlice.actions;
export default productSlice.reducer;
