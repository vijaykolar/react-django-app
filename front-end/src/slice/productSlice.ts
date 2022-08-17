import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import axios from "axios";
import { ProductsTypes } from "../pages/Home";

interface ProductsState {
  product: {};
  loading: string;
  error: string;
}

const initialState: ProductsState = {
  product: {},
  loading: "",
  error: "",
};

export const fetchProduct = createAsyncThunk<any>(
  "products/fetchProduct",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      return data;
    } catch (error) {
      return error;
    }
  }
);

// @ts-ignore
export const productSlice = createSlice<any>({
  name: "product",
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addCase(createAction("sendRequest"), (state, action) => {
  //     state.loading = "loading";
  //   });
  //
  //   builder.addCase(createAction("fetchProducts"), (state, action) => {
  //     state.loading = "fulfilled";
  //     // @ts-ignore
  //     state.products.push(action.payload);
  //     console.log(state);
  //   });
  // },

  // extraReducers: {
  //   [fetchProducts.pending]: (state: any, action: any): any => {
  //     console.log(state);
  //   },
  // },
  extraReducers: (builder) =>
    builder

      .addCase(fetchProduct.pending, () => ({
        loading: true,
        product: [],
        error: "",
      }))
      .addCase(
        fetchProduct.fulfilled,
        (state, action: PayloadAction<ProductsState>) => ({
          loading: false,
          product: action.payload,
          error: "",
        })
      )
      .addCase(fetchProduct.rejected, (state, action) => ({
        loading: false,
        error: action.payload,
        product: [],
      })),
});

export default productSlice.reducer;
