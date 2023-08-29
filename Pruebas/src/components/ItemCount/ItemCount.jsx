import React, { useState } from 'react';




const ItemCount = () => {

    const stock = [
        {
            id: 1,
            nombre: 'Cafe torrado',
            description: 'Clasico aroma para toda la familia',
            precio: 1000,
            cantidad: 5,
        }
    ]

    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const addToCart = () => {

        if (quantity <= stock[0].cantidad) {
            alert('Productos agregados al carrito')
        } else
            alert('No hay stock')
    };


    return (
        <div className='container col-md-4 pb-5'>
            {stock.map(producto => (
                <div className="container">
                    <div key={producto.id} className="card">
                    <img src='https://images.pexels.com/photos/144253/coffee-coffee-cup-porcelain-coffee-beans-144253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="card-img-top" alt="Producto"/> 
                        <div className="card-body">
                            <h2 className="card-title">{producto.nombre}</h2>
                            <p className="card-text">{producto.description}</p>
                            <p className="card-text">Precio: ${producto.precio}</p>

                            <div className="row">
                                <div className="col-6">
                                    <div className="input-group">
                                        <button className="btn btn-primary" data-bs-toggle="button" type="button" onClick={decrementQuantity}>-</button>
                                        <input type="text" className="form-control" value={quantity} readOnly />
                                        <button className="btn btn-primary" data-bs-toggle="button" type="button" onClick={incrementQuantity}>+</button>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <button className="btn btn-primary" onClick={addToCart}>Agregar al carrito</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};



export default ItemCount