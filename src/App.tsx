
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Basket from "./pages/Basket";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Header></Header>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/product/:id" element={<Product></Product>}></Route>
          <Route path="/basket" element={<Basket></Basket>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
