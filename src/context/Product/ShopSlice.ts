import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Product {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
  price: string;
}

export interface ShopType {
  products: Array<Product>;
  basket: Array<{
    product: Product;
    count: number;
  }>;
}

const initialState: ShopType = {
  products: [],
  basket: [],
};

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // API'den veri çekmek için asenkron thunk
// export const fetchProductsData = createAsyncThunk(
//   "products/fetchData",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         `https://665ead651e9017dc16f0e0e9.mockapi.io/odev2/products`
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

export const ShopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addBasket: (state, action: PayloadAction<{ product: Product }>) => {
      const isBasketitem = state.basket.findIndex(
        (item) => item.product.id === action.payload.product.id
      );
      if (isBasketitem > -1) {
        state.basket[isBasketitem].count += 1;
      } else {
        state.basket.push({ count: 1, product: action.payload.product });
      }
    },
    removeBasket: (state, action: PayloadAction<string>) => {
      const isBasketitem = state.basket.findIndex(
        (item) => item.product.id === action.payload
      );
      if (isBasketitem > -1 && state.basket[isBasketitem].count > 1) {
        state.basket[isBasketitem].count -= 1;
      } else {
        state.basket.splice(isBasketitem, 1);
      }
    },
    clearItemBasket: (state, action: PayloadAction<string>) => {
      const isBasketitem = state.basket.findIndex(
        (item) => item.product.id === action.payload
      );
      state.basket.splice(isBasketitem, 1);
    },
    clearBasket: (state, _) => {
      state.basket = [];
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchProductsData.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(fetchProductsData.fulfilled, (state, action: PayloadAction<any>) => {
  //       state.data = action.payload;
  //       state.loading = false;
  //     })
  //     .addCase(fetchProductsData.rejected, (state, action: PayloadAction<string>) => {
  //       state.error = action.payload;
  //       state.loading = false;
  //     });
  // },
});

export const { addBasket, removeBasket, clearBasket, clearItemBasket } =
  ShopSlice.actions;
export default ShopSlice.reducer;
