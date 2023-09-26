import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from '../../context/CartContext';

const Cart = () => {
  const { cart, addItem, removeItem, clear } = useContext(CartContext);

  const total = cart.reduce((total, product) => total + (product.price * product.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className=" container m-5 text-center">
        <h1>No hay productos en el carrito </h1>
        <Link to='/itemlist' className="btn btn-primary mt-5"> Seguir comprando </Link>
      </div>
    )
  }

  return (

    <div className="container">
      <h1 className="py-5">Detalle de tu carrito de compras:</h1>
      <div className="border col-6 py-3">

        <ul>
          {cart.map((item) => (
            <li className="h5" key={item.id}>
              {item.title} - Cantidad: {item.quantity} 
              <br />
              Subtotal: $ {item.price * item.quantity}
              <br />
              <button onClick={() => addItem(item, 1)} className="btn btn-primary btn-sm me-2">
                Agregar
              </button>
              <button onClick={() => removeItem(item.id)} className="btn btn-danger btn-sm">
                Remover item
              </button>
              <hr />
            </li>
          ))}
        </ul>

        <h3 className="h1 text-center fw-bold">Total: ${total} </h3>

      </div>
      <hr />
      <div className="d-flex justify-content-evenly">
        <button onClick={clear} className="btn btn-danger">
          Vaciar carrito
        </button>
        <Link to='/itemlist'>
          <button className="btn btn-info">
            Seguir comprando
          </button>
        </Link>
        <Link to='/checkout'>
          <button className="btn btn-success">
            Finalizar compra
          </button>
        </Link>
      </div>



    </div>
  );
};

export default Cart;
