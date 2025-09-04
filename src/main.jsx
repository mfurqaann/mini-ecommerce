import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import DetailProduct from "./pages/DetailProduct.jsx";
import Navbar from "./components/layout/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<DetailProduct />} />
    </Routes>
  </BrowserRouter>
);
