import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => { //Recibe a Children por props y todo lo que este dentro de el va a poder acceder a los metodos(funciones) que creamos

  const [cart, setCart] = useState([]);



  // Funcion del boton "Agregar" en la pagina del carrito
  const addItem = (product, quantity) => {
    // Ya esta el producto en el carrito?
    const itemInCart = cart.find((item) => item.id === product.id);
    // Si existe, sumar quantity
    if (itemInCart) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) { //Si encontramos el item con el mismo Id
          return {
            ...item, // spread de Array 
            quantity: item.quantity + quantity,
          };
        }
        return item;
      });
      setCart(newCart);
      // si no existe, agregar item a cart
    } else {
      // agregar item a cart
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear}}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
