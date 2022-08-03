import React from 'react';
import Products from '../components/Products';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Home = () => {
  return (
    <div>
        <h2>Welcome to Redux Toolkit Store</h2>
        <div className='container'>
        <Products/>
        </div>
    </div>
  )
}

export default Home