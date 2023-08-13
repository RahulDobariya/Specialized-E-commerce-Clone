import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { CartPage } from './Components/CartPage';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
      <CartPage/>
      </div>
    </ChakraProvider>
  );
}

export default App;
