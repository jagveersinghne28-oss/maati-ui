import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Journal from "./components/Journals";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

// Collections pages
import Collections from "./components/Collection";
import Plates from "./components/Collection/Plates";
import Vases from "./components/Collection/Vases";
import Teapots from "./components/Collection/Teapots";
import Dinnerware from "./components/Collection/Dinnerware";
import ProductDetailPage from "./components/ProductDetailPage";
import WishList from "./components/WishList";
import BreakoutV2Dashboard from "./components/BreakoutV2Dashboard";

const Checkout = () => <h1>Checkout Page</h1>;

const MainRoute = () => {
  return (
      <div className="min-h-screen" style={{marginTop: '3.5rem'}}>
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<BreakoutV2Dashboard />} />
            <Route path="/abou2" element={<BreakoutV2Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<WishList />} />

            {/* Collections with sub-routes */}
            <Route path="/collections" element={<Collections />}>
              <Route path="plates" element={<Plates />} />
              <Route path="vases" element={<Vases />} />
              <Route path="teapots" element={<Teapots />} />
              <Route path="dinnerware" element={<Dinnerware />} />
            </Route>
            <Route path="/product/:id" element={<ProductDetailPage />} />

            {/* Redirect unknown paths to home */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
  );
};

export default MainRoute;
