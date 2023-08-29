import {Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar />
      
      <Routes>
        <Route path='/' element = {<ItemListContainer />} />
        <Route path='/category/:categoryId' element = {<ItemListContainer />} />
        <Route path='/item/:id' element = {<ItemListContainer />} />
      </Routes>
    </>
  )
}

export default App
