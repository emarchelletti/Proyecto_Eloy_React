// Este es un componente de presentacion que muestra el resultado de las funciones que hace el componente funcional "ItemListContainer"
import { useState } from 'react';

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
                        <div key={producto.id} className="card mb-5">
                            <img src={producto.img} className="card-img-top" alt="Producto" />
                            <div className="card-body">
                                <h2 className="card-title">{producto.name}</h2>
                                <h3 className="card-text">{producto.description}</h3>
                                <p className="card-text">Precio: ${producto.price}</p>

                                <div className="row">
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

    // <div>
    //     <h2>Lista de productos</h2>
    //     <ul>
    //         {productos.map((product) => (
    //             <li key={product.id}>
    //                 {product.name} - ${product.price}
    //             </li> // Es muy importante usar el atributo key en react para que no renderize todos los productos y consuma menos memoria la carga
    //         ))}
    //     </ul>
    // </div>

};

export default ItemList;


