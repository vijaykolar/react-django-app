import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import axios from "axios";

interface ProductsState {
  products: string[];
  loading: string;
  error: string;
}

const initialState: ProductsState = {
  products: [],
  loading: "",
  error: "",
};

export const fetchProducts = createAsyncThunk<any>(
  "products/fetchProducts1",
  async () => {
    try {
      const { data } = await axios.get("/api/products");
      return data;
    } catch (error) {
      return error;
    }
  }
);

// @ts-ignore
export const productsSlice = createSlice<any>({
  name: "products",
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

      .addCase(fetchProducts.pending, () => ({
        loading: true,
        products: [],
        error: "",
      }))
      .addCase(fetchProducts.fulfilled, (state, action) => ({
        loading: false,
        products: action.payload,
        error: "",
      }))
      .addCase(fetchProducts.rejected, (_, action) => ({
        loading: false,
        error: action.payload,
        products: [],
      })),
});

export default productsSlice.reducer;
