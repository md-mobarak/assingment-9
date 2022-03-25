import React, { useEffect, useState } from 'react';

const Product = () => {
    const [mobiles, setMobiles] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setMobiles(data))
    }, [])
    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default Product;