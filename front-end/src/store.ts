import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slice/productsSlice";
import productSlice from "./slice/productSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    product: productSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
