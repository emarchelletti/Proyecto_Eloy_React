import {Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer.jsx';
import CardContainer from './components/Card/CardContainer';

function App() {

  return (
    <>

      <Navbar />
      
      <Routes>
        <Route path='/' element = {<ItemListContainer />} />
        <Route path='/category/:categoryId' element = {<ItemListContainer />} />
        <Route path='/item/:id' element = {<CardContainer />} />
      </Routes>
    </>
  )
}

export default App
