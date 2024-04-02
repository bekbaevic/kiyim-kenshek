import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketProducts: [],
  basketList: [],
  total: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      if (state.basketProducts.find((item) => item.id === action.payload.id)) {
        state.basketList = [
          { id: action.payload.id, price: action.payload.price },
          ...state.basketList,
        ];
        state.total += action.payload.price;
      } else {
        state.basketProducts = [action.payload, ...state.basketProducts];
        state.basketList = [
          { id: action.payload.id, price: action.payload.price },
          ...state.basketList,  
        ];
        state.total += action.payload.price;
      }
    },
    deleteProduct: (state, action) => {
      state.basketProducts = state.basketProducts.filter(
        (item) => item.id !== action.payload.id
      );
      state.total -=
        action.payload.price *
        state.basketList.filter((item) => item.id === action.payload.id).length;
      state.basketList = state.basketList.filter(
        (item) => item.id !== action.payload.id
      );
    },
    decrementCount: (state, action) => {
      state.basketList.splice(
        state.basketList.indexOf(
          state.basketList.find((item) => item.id === action.payload.id)
        ),
        1
      );
      state.total -= action.payload.price;
    },
  },
});

export const { setProduct, deleteProduct, decrementCount } =
  basketSlice.actions;
export default basketSlice.reducer;
