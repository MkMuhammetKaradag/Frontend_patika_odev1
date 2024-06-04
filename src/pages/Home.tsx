
import { useAppSelector } from "../context/hooks";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const product = useAppSelector((s) => s.app.products);

  return (
    <div className="container">
      <div className="border-">
        <div className="grid grid-cols-5 gap-4">
          {product.map((item, index) => (
            <ProductCard key={index} item={item}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
