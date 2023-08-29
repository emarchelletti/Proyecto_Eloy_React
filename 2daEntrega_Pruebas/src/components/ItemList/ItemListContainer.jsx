import { useState, useEffect } from 'react';
import ItemList from "./ItemList";
import { getProducts } from "../../services/productos";


const ItemListContainer = () => {
    const [product, setProducts] = useState([]); // Se declara el estado product y la funcion setProducts

    useEffect(() => {
        getProducts().then((result) => {

            setProducts(result.stock);

        });
    }, []);

    return <ItemList productos={product}/>

};

export default ItemListContainer;