import { useState, useEffect, useContext } from 'react';
import { getProduct } from '../../services/productos';
import Card from './Card';
import { useParams } from 'react-router-dom';
import CartContext from '../../context/CartContext';


const CardContainer = () => {

    const [product, setProducts] = useState([]); // Se declara el estado product y la funcion setProducts
    const {id} = useParams();
    const {addItem} = useContext(CartContext);

    useEffect(() => {

        getProduct(id).then((result) => {
            setProducts(result);
        });

    }, [id]);

    return <Card item={product} addItem={addItem}/>;
}

export default CardContainer;