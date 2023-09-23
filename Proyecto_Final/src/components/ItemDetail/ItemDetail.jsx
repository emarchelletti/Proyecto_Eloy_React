import { useState } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const Card = ({ item, addItem }) => {

  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!item) {
    return <h1 className='text-center mt-5'>Producto no encontrado</h1>
  }

  return (

    <>
      

      <div className='container mt-2'>
      
        <div className='row justify-content-center align-items-center'>

        
        

          <div className="col-5">
            <div className="card mb-5 shadow ">

              <img src={`../../../public/${item.imageId}`} className="card-img-top img-fluid" alt="Producto" />

              <div className="card-body">
                <p className="card-text">{item.description}</p>
                <p className="card-text display-6">Precio: ${item.price}</p>

                <div className="d-flex justify-content-around">
                  <div className="col-4">
                    <div className="input-group">
                      <button className="btn btn-primary" data-bs-toggle="button" type="button" onClick={decrementQuantity}>-</button>
                      <input type="text" className="form-control" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
                      <button className="btn btn-primary" data-bs-toggle="button" type="button" onClick={incrementQuantity}>+</button>
                    </div>
                  </div>

                  <div className="col-6">
                    <button className="btn btn-primary" onClick={() => addItem(item, quantity)}>Agregar al carrito</button>
                  </div>
                </div>

              </div>

            </div>

          </div>

          <div className=' col-6'>
        <h1 className='text-center display-3 mt-2'>{item.title}</h1>
        <div className='d-flex justify-content-evenly'>
          <Link to='/' className="btn btn-secondary btnProducto m-1"> Seguir comprando </Link>
          <Link to="/cart" className="btn btn-success btnProducto m-1"> Terminar compra </Link> 
          </div>
        </div>


        </div>

        

      </div>
    </>
  );


};

Card.propTypes = {
  item: PropTypes.object,
  addItem: PropTypes.func,
};

export default Card;