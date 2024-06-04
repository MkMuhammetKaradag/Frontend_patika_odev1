import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import shopReducer from "./Product/ShopSlice";

const store = configureStore({
  reducer: {
    app: shopReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
