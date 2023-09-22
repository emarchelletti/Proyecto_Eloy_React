import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from '../../context/CartContext';

const Cart = () => {
  const { cart, addItem, removeItem, clear } = useContext(CartContext);

  const total = cart.reduce((total, product) => total + (product.price*product.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className=" container m-5">
        <h1>No hay productos en el carrito </h1>
        <Link to='/' className="btn btn-primary mt-5"> Seguir comprando </Link>
      </div>
    )
  }

  return (

    <div className="container m-5">
      <h1>Detalle de tu carrito de compras</h1>

      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - Cantidad: {item.quantity} Precio: $ {item.price*item.quantity}
            <br />
            <button
              onClick={() => addItem(item, 1)}
              className="btn btn-primary me-2"
            >
              Agregar
            </button>
            <button
              onClick={() => removeItem(item.id)}
              className="btn btn-danger"
            >
              Remover item
            </button>
          </li>
        ))}
      </ul>

      <h3>Total: ${total} </h3>
      <hr />
      <div className="d-flex justify-content-evenly">
        <button onClick={clear} className="btn btn-danger">
        Vaciar carrito
        </button>
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
