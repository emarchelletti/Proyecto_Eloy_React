import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList";
import { getProducts } from "../../services/productos";


const ItemListContainer = () => {
    const [product, setProducts] = useState([]); // Se declara el estado product y la funcion setProducts
    const {categoryId} = useParams();
    
    useEffect(() => {
       
        getProducts(categoryId).then((result) => {

            setProducts(result);

        });
    }, [categoryId]);

    return <ItemList products={product}/>

};

export default ItemListContainer;