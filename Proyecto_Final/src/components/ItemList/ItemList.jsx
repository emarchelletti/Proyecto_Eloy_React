import { Link } from 'react-router-dom';
import './ItemList.css';

const ItemList = ({ products }) => {
    return (
        <>
            <h1 className='text-center display-3 mt-2'>Catalogo de productos</h1>
            <div className='container'>
                <div className='row'>
                    {products.map(product => (
                        <div className="col-4">
                            <div className="card mb-5 shadow ">
                                <img src={`../../../${product.imageId}`} className="card-img-top" height="250" alt="product" />
                                <div className="card-body">
                                    <h2 className="card-title h2 text-center">{product.title}</h2>
                                    <p className="card-text">{product.description}
                                    <p className="h4">Precio x unidad: ${product.price}</p>
                                    </p>
                                    <div className="d-flex justify-content-center mt-4">
                                        <Link to={`/item/${product.id}`} className='text-decoration-none'>
                                            <button className="btn btn-primary">Comprar</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ItemList;


