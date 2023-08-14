import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { CartPage } from './Components/CartPage';
import PaymentPage from './Components/PaymentPage';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
      <PaymentPage/>
      </div>
    </ChakraProvider>
  );
}

export default App;
