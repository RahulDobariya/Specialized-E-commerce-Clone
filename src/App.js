import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import ProductPage from './Pages/ProductPage';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
     <ProductPage/>
      </div>
    </ChakraProvider>
  );
}

export default App;
