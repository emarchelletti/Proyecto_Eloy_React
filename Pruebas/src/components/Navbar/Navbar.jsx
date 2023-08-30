import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">

            <div className='container'>
                <div>
                    <i class="bi bi-cup-hot-fill fs-1"></i>
                    <Link to='/' className='navbar-brand fs-2 text-white text-center ms-3'>
                        Coffee Market
                    </Link>
                </div>

                <ul className='navbar-nav mx-auto'>
                    <li className="nav-item">
                        <NavLink  to="/category/Aromas" className="nav-link fs-5 text-white border-start border-white border-3">Aromas</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink  to="/category/Cafeteras" className="nav-link fs-5 text-white border-start border-white border-3">Cafeteras</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink  to="/category/Regalos" className="nav-link fs-5 text-white border-start border-white border-3">Regalos</NavLink>
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