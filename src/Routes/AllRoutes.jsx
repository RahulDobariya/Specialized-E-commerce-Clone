import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Screens/Homepage";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/*<Route path="/login" element={<Login/>} />
      <Route path="/productPage" element={<ProductPage/>}/>
      <Route path="/productPage/details/:id" element={<Detailspage/>}/>
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/wishlist" element= {<Wishlist/> }/>
      <Route path="/payment" element={<Protected><PaymentPage/></Protected>}/>
      <Route path="*" element={<Homepage/>}/> */}
    </Routes>
  );
};

export default AllRoutes;