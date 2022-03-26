import React from 'react';
import './ProductSummary.css'

const ProductSummary = ({ cart }) => {
    const { name, id, img } = cart;
    return (
        <div className='cart'>
            <p>{name}</p>
            <img src={img} alt="" />


        </div>


    );
};

export default ProductSummary;