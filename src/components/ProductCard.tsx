import React from "react";
import { Product } from "../context/Product/ShopSlice";
import { SlBasketLoaded } from "react-icons/sl";
import { Link } from "react-router-dom";
interface ProductCardProps {
  item: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:scale-105">
      <img className="w-full" src={`${item.avatar}`} alt="Product Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl cursor-pointer mb-2">
          <Link to={`product/${item.id}`}>{item.name}</Link>
        </div>
        <p className="text-gray-700 text-base">{item.price}</p>
      </div>
      <div className="px-6 pt-4  flex flex-row  justify-between pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #etiket1
        </span>
        <span
          onClick={() => console.log("hello world")}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm cursor-pointer font-semibold text-gray-700 mr-2 mb-2"
        >
          <SlBasketLoaded />
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
