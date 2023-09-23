import React from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';

const WelcomePage = () => {

  return (
    <div className="welcome-container text-center d-flex align-items-center justify-content-center">
      <div>
        <h1 className='display-1'>Bienvenido</h1>
        <Link to={`/itemlist`} className='text-decoration-none'>
          <p className='text'>Ver productos</p>
        </Link>
      </div>
    </div>
  )
}

export default WelcomePage