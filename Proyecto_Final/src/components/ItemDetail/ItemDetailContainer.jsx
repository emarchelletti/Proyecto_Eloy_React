import { useState, useEffect, useContext } from 'react';
import { getProduct } from '../../services/productos';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import CartContext from '../../context/CartContext';


const ItemDetailContainer = () => {

    const [product, setProducts] = useState([]); // Se declara el estado product y la funcion setProducts
    const {id} = useParams();
    const {addItem} = useContext(CartContext);

    useEffect(() => {

        getProduct(id).then((result) => {
            setProducts(result);
        });

    }, [id]);

    return <ItemDetail item={product} addItem={addItem}/>;
}

export default ItemDetailContainer;