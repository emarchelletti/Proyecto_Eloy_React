import { useState } from "react";


const CartWidget = () => {
    const [cart, setCart] = useState(0);

    const handleCartClick = () => {
        setCart(cart + 1);
    }

    return (

        <button className="btn btn-primary position-relative" onClick={handleCartClick}>
            <i className="bi bi-cart"></i>
            <span className=" top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
            {cart}
            </span>
            <span className="visually-hidden">New alerts</span>

        </button >
    )
}

export default CartWidget