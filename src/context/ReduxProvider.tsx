import React, {  useEffect, useState } from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import appReducer, { Product } from "./Product/ShopSlice";
import axios from "axios";

interface ReduxProviderProps {
  children: React.ReactElement<any>;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    axios
      .get<Product[]>(
        "https://665ead651e9017dc16f0e0e9.mockapi.io/odev2/products"
      )
      .then((response) => {
        if (response.data) {
          setProducts(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const reducer = {
    app: appReducer,
  };

  const store = configureStore({
    reducer,
    preloadedState: {
      app: {
        basket: [],
        products: products,
      },
    },
  });

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
