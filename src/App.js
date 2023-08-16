import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import AllRoutes from './Routes/AllRoutes';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import React from "react";

function App() {
  
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <AllRoutes />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
