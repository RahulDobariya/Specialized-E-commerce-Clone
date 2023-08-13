import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductPage from "../Pages/ProductPage";
import SingleProductPage from "../Pages/SingleProductPage";


const AllRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login/>} />
    
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/wishlist" element= {<Wishlist/> }/>
      <Route path="/payment" element={<Protected><PaymentPage/></Protected>}/>
      <Route path="*" element={<Homepage/>}/> */}
      <Route path="/productPage" element={<ProductPage/>} />
      <Route path="/productPage/:id" element={<SingleProductPage/>} />
    </Routes>
  );
};

export default AllRoutes;