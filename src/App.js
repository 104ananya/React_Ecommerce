import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from './Products';
import Contact from './Contact';
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import ErrorPage from "./ErrorPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/category/:id" element={<Category />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />}/>
        <Route path="/cart" element={<Cart />}/>

        {/* if user access any other url then throw error page */}
        <Route path="*" element={<ErrorPage/>} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
