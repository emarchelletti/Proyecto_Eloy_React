import { useState } from "react";

const CartWidget = () => {
    const [cart, setCart] = useState(0);

    
    const handleCartClick = () => {
        if (cart < 10) {
        setCart(cart + 1);
    }
}

    return (

        <button type="button" className="btn btn-dark position-relative" onClick={handleCartClick}>
            <i className="bi bi-cart-fill fs-3"></i>
            <span className=" position-absolute start-80 badge bg-danger rounded-pill">
            {cart}
            </span>
            <span className="visually-hidden">Cantidades carrito</span>

        </button >
    )
}

export default CartWidget