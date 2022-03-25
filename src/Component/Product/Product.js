import React, { } from 'react';
import './Product.css'

const Product = ({ data }) => {
    const { name, id, img, price } = data
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>Name:{name}</h3>
                <p>Id:{id}</p>
                <h1>Price:{price}</h1>
                <button>Add to Cart</button>
            </div>

        </div>
    );
};

export default Product;