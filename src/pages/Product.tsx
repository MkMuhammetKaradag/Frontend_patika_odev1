import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product as ProdctType, addBasket } from "../context/Product/ShopSlice";
import axios from "axios";
import { useAppDispatch } from "../context/hooks";

const Product = () => {
  const [product, setProduct] = useState<ProdctType | undefined>();
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    axios
      .get<ProdctType>(
        `https://665ead651e9017dc16f0e0e9.mockapi.io/odev2/products/${id}`
      )
      .then((response) => {
        if (response.data) {
          setProduct(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const addToBasket = (item: ProdctType) => {
    dispatch(addBasket({ product: item }));
  };
  return (
    <div className="flex    flex-col md:flex-row md:max-w-3xl rounded-lg bg-blue-50 shadow-lg">
      {product && (
        <>
          <img
            className=" md:h-auto md:w-72 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={product.avatar}
            alt={product.name}
          />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {product.name}
            </h5>
            <p className="text-gray-700 text-base mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus aperiam atque natus obcaecati itaque temporibus
              quisquam ab ipsum. Harum eius itaque tempora quia, iusto nesciunt
              et possimus praesentium saepe corrupti!
            </p>
            <p className="text-gray-900 text-xl font-semibold">
              ${product.price}
            </p>
            <div className="flex   justify-end mt-4">
              <button
                onClick={() => addToBasket(product)}
                className="text-white bg-gray-600 hover:bg-gray-800 font-bold py-2 px-4 rounded-lg"
              >
                ADD TO BASKET
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
