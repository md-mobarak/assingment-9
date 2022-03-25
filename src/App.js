import logo from './logo.svg';
import './App.css';
import Product from './Component/Product/Product';
import { useEffect, useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import ProductSummary from './Component/ProductSummary/ProductSummary';

function App() {
  const [mobiles, setMobiles] = useState([])

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setMobiles(data))
  }, [])
  return (
    <div>
      <Navbar></Navbar>
      <ProductSummary></ProductSummary>
      <div className='all-product'>
        {
          mobiles.map(mobile => <Product data={mobile} key={mobile.id}></Product>)
        }
      </div>
    </div>
  );
}

export default App;
