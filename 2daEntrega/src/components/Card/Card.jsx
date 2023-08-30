// Este es un componente de presentacion que muestra el resultado de las funciones que hace el componente funcional "ItemListContainer"
import { useState } from 'react';
import PropTypes from "prop-types";

const Card = ({ card }) => {
  console.log(card);
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // const addToCart = () => {

  //     if (quantity <= stock[0].cantidad) {
  //         alert('Productos agregados al carrito')
  //     } else
  //         alert('No hay stock')
  // };

  return (

    <>
      <div className='container'>

        <div className='row justify-content-center'>
        <h1 className='text-center'>Detalle del Producto</h1>

          <div className="col-4">
            <div className="card mb-5 shadow">
              <img src={card.img} className="card-img-top img-fluid" alt="Producto" />
              <div className="card-body">
                <h2 className="card-title">{card.name}</h2>
                <h3 className="card-text">{card.description}</h3>
                <p className="card-text">Precio: ${card.price}</p>

                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="input-group">
                      <button className="btn btn-primary" data-bs-toggle="button" type="button" onClick={decrementQuantity}>-</button>
                      <input type="text" className="form-control" value={quantity} readOnly />
                      <button className="btn btn-primary" data-bs-toggle="button" type="button" onClick={incrementQuantity}>+</button>
                    </div>
                  </div>

                  <div className="col-6">
                    <button className="btn btn-primary" /*>onClick={addToCart}*/>Agregar al carrito</button>
                  </div>
                </div>

              </div>
            </div>

          </div>


        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  card: PropTypes.object,
};

export default Card;