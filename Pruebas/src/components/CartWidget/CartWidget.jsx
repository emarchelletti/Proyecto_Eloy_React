import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';
import {getCartQuantity} from '../../services/utils';

const CartWidget = () => {
    const {cart} = useContext(CartContext);
    const quantity = getCartQuantity(cart);
    
    return (
        <Link to='/Cart'>
        <button type="button" className="btn btn-dark position-relative">
            <i className="bi bi-cart-fill fs-3"></i>
            <span className=" position-absolute start-80 badge bg-danger rounded-pill">
            {quantity > 0 ? quantity : ""}
            </span>
            <span className="visually-hidden">Cantidades carrito</span>
            
        </button >
        </Link>
    )
}

export default CartWidget