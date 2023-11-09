import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import './App.css';

const Products = lazy(() => import("./pages/Products"));
const Cart = lazy(() => import("./pages/Cart"));

function App() {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Products />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    );
}

export default App;
