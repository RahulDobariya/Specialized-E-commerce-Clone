import React,{useState,useEffect} from "react";
import { Route, Routes } from "react-router-dom";

import ProductPage from "../Pages/ProductPage";
import SingleProductPage from "../Pages/SingleProductPage";

import Homepage from "../Screens/Homepage";


// anand
import Login from '../Components/Authentication/Login/Login';
import SignUp from '../Components/Authentication/SignUp/SignUp';
import {CartPage} from "../Components/CartPage"
import PaymentPage from "../Components/PaymentPage";
import { auth } from '../firebase';
// import { AuthContextProvider } from './Components/Context/AuthContext';
// anand

const AllRoutes = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login/>} />

    
      <Route path="/cart" element={<CartPage/>} />

      <Route path='/signup' element={<SignUp/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/payment" element={<PaymentPage/>}/>
      {/* <Route path="/productPage" element={<ProductPage/>}/>
      <Route path="/productPage/details/:id" element={<Detailspage/>}/>
       

      <Route path="/wishlist" element= {<Wishlist/> }/>
      <Route path="/payment" element={<Protected><PaymentPage/></Protected>}/>
      <Route path="*" element={<Homepage/>}/> */}
      {/* <Route path="/productPage" element={<ProductPage/>} />
      <Route path="/productPage/:id" element={<SingleProductPage/>} /> */}
    </Routes>
  );
};

export default AllRoutes;