import logo from './logo.svg';
import './App.css';
import Product from './Component/Product/Product';
import { useEffect, useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import ProductSummary from './Component/ProductSummary/ProductSummary';

function App() {
  const [mobiles, setMobiles] = useState([])
  const [carts, setCarts] = useState([])

  let handleAddToCart = (data) => {
    const newCart = [...carts, data]
    setCarts(newCart)
    // console.log(newCart);

  }
  const clearSummary = () => {
    const newCart = [];
    setCarts(newCart)

  }
  const chooseOne = () => {
    const newCart = carts
    // console.log(carts);
    const randomCart = newCart[Math.floor(newCart.length * Math.random())]
    console.log(randomCart);
    const newRandom = randomCart.name;
    console.log(newRandom);

    // console.log(newRandom);
    setCarts(newRandom)

  }



  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setMobiles(data))
  }, [])
  return (
    <div>
      <Navbar></Navbar>

      <div className='all-product'>
        <div className='products'>
          {
            mobiles.map(mobile => <Product data={mobile}
              key={mobile.id}
              handleAddToCart={handleAddToCart}

            ></Product>)
          }
        </div>
        <div className='pd-summary'>
          <h1>selected Phone</h1>
          {

            carts.map(cart => <ProductSummary key={cart.id} cart={cart}>

            </ProductSummary>)
          }
          <button className='clear-btn' onClick={clearSummary}>Clear</button> <br />
          <button className='chose-btn' onClick={chooseOne}>Choose One</button>
        </div>
      </div>
    </div>
  );
}

export default App;
