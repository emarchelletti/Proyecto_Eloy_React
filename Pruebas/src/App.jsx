import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemList/ItemListContainer.jsx';
import CardContainer from './components/Card/CardContainer';
import CartProvider from './context/CartProvider';
import Checkout from './components/CheckOut/Checkout';
import WelcomePage from './components/Welcome/Welcome';
import Cart from './components/CartWidget/Cart';

function App() {

  return (
    <CartProvider>

      <Navbar />

      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<CardContainer />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

    </CartProvider>
  )
}

export default App
