import React, { } from 'react';
import './Product.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = ({ data, handleAddToCart }) => {
    const { name, id, img, price } = data
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>Name:{name}</h3>
                <p>Id:{id}</p>
                <h1>Price:{price}</h1>
                <button onClick={() => handleAddToCart(data)}>Add To Cart
                    <FontAwesomeIcon
                        icon={faShoppingCart}
                        style={{ paddingLeft: '10px' }}
                    ></FontAwesomeIcon>
                </button>
            </div>

        </div>
    );
};

export default Product;