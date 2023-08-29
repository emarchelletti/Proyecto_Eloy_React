import React from 'react';
import Navbar from './components/Navbar/NavBar';
import Card from './components/Card/Card';
import ItemListContainer from './components/ItemList/ItemListContainer.jsx';



const App = () => {
  return (
    <>
    <Navbar />  
    {/* <Card /> */}
    <ItemListContainer />
    </>
  )  
  
}

export default App
