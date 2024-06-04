import React from "react";
import {
  Product,
  addBasket,
  clearItemBasket,
  removeBasket,
} from "../context/Product/ShopSlice";
import { useAppDispatch } from "../context/hooks";
interface BasketCardProps {
  item: {
    count: number;
    product: Product;
  };
}

const BasketCard: React.FC<BasketCardProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const removeFromBasket = (id: string) => {
    dispatch(removeBasket(id));
  };

  const addToBasket = (product: Product) => {
    dispatch(addBasket({ product }));
  };

  const clearItemFromBasket = (id: string) => {
    dispatch(clearItemBasket(id));
  };
  return (
    <>
      <div
        className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
        key={item.product.id}
      >
        <div className="flex w-2/5">
          <div className="w-20">
            <img
              className="h-24"
              src={item.product.avatar}
              alt={item.product.name}
            />
          </div>
          <div className="flex flex-col justify-between ml-4 flex-grow">
            <span className="font-bold text-sm">{item.product.name}</span>
            <button
              onClick={() => clearItemFromBasket(item.product.id)}
              className="font-semibold bg-gray-400 w-20 h-8 border-2 rounded-lg hover:bg-red-500 text-white text-xs"
            >
              Clear
            </button>
          </div>
        </div>
        <div className="flex justify-center w-1/5">
          <button
            onClick={() => removeFromBasket(item.product.id)}
            className="fill-current text-gray-600 w-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 10a1 1 0 01-1-1V6a1 1 0 011-1h1a1 1 0 011 1v3a1 1 0 01-1 1H5zm4 0a1 1 0 01-1-1V6a1 1 0 011-1h1a1 1 0 011 1v3a1 1 0 01-1 1H9zm4 0a1 1 0 01-1-1V6a1 1 0 011-1h1a1 1 0 011 1v3a1 1 0 01-1 1h-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <input
            className="mx-2 border text-center w-8"
            type="text"
            value={item.count}
            readOnly
          />
          <button
            onClick={() => addToBasket(item.product)}
            className="fill-current text-gray-600 w-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H5a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <span className="text-center w-1/5 font-semibold text-sm">
          {item.product.price} TL
        </span>
        <span className="text-center w-1/5 font-semibold text-sm">
          {+item.product.price * item.count} TL
        </span>
      </div>
    </>
  );
};

export default BasketCard;
