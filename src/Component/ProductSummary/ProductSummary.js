import React from 'react';
import './ProductSummary.css'

const ProductSummary = ({ cart }) => {
    const { name, id } = cart;
    return (
        <div className='cart'>
            <h1>{name}</h1>

        </div>


    );
};

export default ProductSummary;