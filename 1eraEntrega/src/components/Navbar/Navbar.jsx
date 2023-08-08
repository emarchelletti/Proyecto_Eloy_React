import React from 'react';
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">

            <div className='container'>
                <div>
                    <i class="bi bi-cup-hot-fill fs-1"></i>
                    <a href='#' className='navbar-brand fs-2 text-white text-center ms-3'>
                        Coffee Market
                    </a>
                </div>

                <ul className='navbar-nav mx-auto'>
                    <li className="nav-item">
                        <a className="nav-link fs-5 text-white border-start border-white border-3" href="#">Aromas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fs-5 text-white border-start border-white border-3" href="#">Accesorios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fs-5 text-white border-start border-end border-white border-3" href="#">Regalos</a>
                    </li>
                </ul>

                <div>
                    <CartWidget />
                </div>

            </div>

        </nav>
    )
};

export default Navbar;