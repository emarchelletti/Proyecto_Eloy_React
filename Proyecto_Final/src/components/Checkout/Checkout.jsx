import { useContext, useState } from "react";
import CartContext from '../../context/CartContext'
import { serverTimestamp } from "firebase/firestore";
import { getCartTotal, mapCartToOrderItems } from '../../services/utils';
import { createOrder } from "../../services/productos";

const Checkout = () => {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cart, clear } = useContext(CartContext);

  const total = getCartTotal(cart);

  const handleCheckout = (event) => {
    event.preventDefault();

    if (!name || !lastName || !phone || !email || !emailConfirmation) {
      setError("Por favor complete todos los campos");
      return;
    }

    if (email !== emailConfirmation) {
      setError("Los campos del email no coinciden");
      return;
    }

    const order = {
      buyer: { name,lastName,phone,email },
      items: mapCartToOrderItems(cart),
      date: serverTimestamp(),
      total,
    };

    setIsLoading(true);
    createOrder(order).then((docRef) => {
      setOrderId(docRef.id);
      setIsLoading(false);
      clear();
    });
  };

  return (
    <div>
      

      {orderId && 
        <>
        <h1 className="text-center display-3 mt-5"> ¡Gracias por tu compra! </h1>
        <br />
        <p className="text-center display-6"> Tu número de orden es: {orderId} </p>
        </>
      }



      {!orderId && (
        <>
          
          <h1 className="text-center display-1">Checkout</h1>
          
          <div>
            
            <form onSubmit={handleCheckout}>
            <div className="container border rounded">
            <h2>Detalle de la compra</h2>
            <ul>{cart.map((item) => (
              <li key={item.id}>
                <p>{item.title}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio por unidad: ${item.price}</p>
                <p>Subtotal: ${item.price * item.quantity}</p>
              </li>
              
            ))}
            </ul>
            <p className="display-6 text-center">Precio final: ${total}</p>
          </div>
              
              <div className='container-fluid col-4 border rounded p-5 shadow-lg mt-3'>
                <d>
                <h3>Formulario de contacto</h3>
                  <label htmlFor="" className="form-label">Nombre</label>
                  <input type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                </d>

                <div>
                  <label htmlFor="" className="form-label">Apellido</label>
                  <input type="text" className='form-control' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>

                <div>
                  <label htmlFor="" className="form-label">Teléfono</label>
                  <input type="text" className='form-control' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div>
                  <label htmlFor="" className="form-label">Email </label>
                  <input type="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                  <label htmlFor="" className="form-label">Email Confirmación</label>
                  <input type="email" className='form-control' value={emailConfirmation} onChange={(e) => setEmailConfirmation(e.target.value)} />
                </div>
                {error && <p style={{ color: "red" }}> {error} </p>}
                <button type='submit' onClick={handleCheckout} className="btn btn-success btnProducto mt-4">Finalizar Compra</button>
              </div>
            </form>
            {isLoading && <p className="display-3 text-center">Procesando compra...</p>}
          </div>

          

        </>
      )}

    </div>
  );
};

export default Checkout;
