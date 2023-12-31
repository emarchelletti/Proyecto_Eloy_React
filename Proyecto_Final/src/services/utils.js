  // obtengo la cantidad de productos en el carrito
  export const getCartQuantity = (cart) => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });
    return count;
  };
  
  // obtengo el valor total del carrito
  export const getCartTotal = (cart) => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };
  
  
  export const mapCartToOrderItems = (cart) => {
    return cart.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      price: item.price,
      title: item.title,
    }));
  };