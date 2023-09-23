import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemList/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
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
        <Route path='/itemlist' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

    </CartProvider>
  )
}

export default App
