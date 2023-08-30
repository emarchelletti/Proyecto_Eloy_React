import { useState, useEffect } from 'react';
import { getProduct } from '../../services/productos';
import Card from './Card';
import { useParams } from 'react-router-dom';


const CardContainer = () => {

    const [product, setProducts] = useState([]); // Se declara el estado product y la funcion setProducts
    const {id} = useParams();

    useEffect(() => {

        getProduct(id).then((result) => {
            setProducts(result);
        });

    }, [id]);

    return <Card card={product} />;
}

export default CardContainer;