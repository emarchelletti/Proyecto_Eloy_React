import React from 'react';
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className='container-fluid'>

                <a href='#' className='navbar-brand fs-2 text-white'>
                    Coffe Market
                </a>

                <ul className='navbar-nav mx-auto'>
                    <li className="nav-item">
                        <a className="nav-link fs-5 text-black" href="#">Aromas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fs-5 text-black" href="#">Accesorios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fs-5 text-black" href="#">Regalos</a>
                    </li>
                </ul>

                <div className=''>
                    <CartWidget />
                </div>

            </div>
        </nav>
    )
};

export default Navbar;