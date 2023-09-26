import { Link } from 'react-router-dom';
import './ItemList.css';

const ItemList = ({ products }) => {
    return (
        <>
            <h1 className='display-5 py-2 text-center container'>Catálogo de productos</h1>
            <div className="album py-5">
            <div className='container'>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                    {products.map(product => (
                        <div className="col">
                            <div className="card shadow-sm fixed-height-card">
                                <img src={`../../../${product.imageId}`} className="bd-placeholder-img card-img-top" width="100%" height="250" alt="product" />
                                <div className="card-body">
                                    <h2 className="card-title h2 text-center fw-bold">{product.title}</h2>
                                    <p className="card-text">{product.description}</p>
                                    <p className="fw-bold">Precio x unidad: ${product.price}</p>
                                    <div className="d-flex justify-content-center">
                                        <Link to={`/item/${product.id}`} className='text-decoration-none'>
                                            <button className="btn btn-info btn-lg">Comprar</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </>
    );
};

export default ItemList;


