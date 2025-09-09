import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "react-redux";

import "./index.css";
import DetailProduct from "./pages/DetailProduct.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import store from "./store/index.js";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<DetailProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
