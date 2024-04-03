import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Reducers/Product.slice";
import BasketSlice from "./Reducers/Basket.slice";
import userSlice from "./Reducers/user.slice";

export const store = configureStore({
  reducer: { basket: BasketSlice, product: ProductSlice, user: userSlice },
});
