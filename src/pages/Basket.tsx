import { useAppSelector } from "../context/hooks";
import BasketCard from "../components/BasketCard";

const Basket = () => {
  const basketProducts = useAppSelector((s) => s.app.basket);
  console.log(basketProducts);
  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Alışveriş Sepeti</h1>
            <h2 className="font-semibold text-2xl">
              {basketProducts.length} Ürün
            </h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Ürün Detayları
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Miktar
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
              Fiyat
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
              Sil
            </h3>
          </div>
          {basketProducts.map((item, index) => (
            <BasketCard item={item} key={index}></BasketCard>
          ))}
          {/* Sepet özeti */}
          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Sepet Özeti
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Toplam</span>
              <span className="font-semibold text-sm">
                {basketProducts.reduce(
                  (acc, item) => acc + +item.product.price * item.count,
                  0
                )}{" "}
                TL
              </span>
            </div>
            <button className="bg-indigo-500 py-3 text-sm text-white uppercase w-full rounded hover:bg-indigo-600">
              Ödeme Yap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
