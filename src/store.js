import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Reducers/Product.slice";
import BasketSlice from "./Reducers/Basket.slice";

export const store = configureStore({
  reducer: { basket: BasketSlice, product: ProductSlice },
});
