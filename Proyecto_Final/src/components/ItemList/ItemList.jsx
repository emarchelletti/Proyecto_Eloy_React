// Este es un componente de presentacion que muestra el resultado de las funciones que hace el componente funcional "ItemListContainer"
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ productos }) => {

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
            <h1 className='text-center display-1'>Productos</h1>
            <div className='container'>
                <div className='row'>
                    {productos.map(producto => (
                        <div className="col-4">
                            {/* // Uso las `` para poder concatenar un string */}

                            <div className="card mb-5 shadow">
                                <Link to={`/item/${producto.id}`} className='text-decoration-none'>
                                    <img src={producto.img} className="card-img-top img-fluid" alt="Producto" />
                                </Link>
                                <div className="card-body">
                                    <h2 className="card-title h1">{producto.title}</h2>
                                    <h3 className="card-text h4">{producto.description}</h3>
                                    <p className="card-text">Precio: ${producto.price}</p>
                                    <p className="card-text">Stock: {producto.stock}</p>

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

                    ))}
                </div>
            </div></>
    );
};

export default ItemList;


