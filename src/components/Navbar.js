import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


const Navbar = () => {
  const items = useSelector((state)=>state.cart);
  return (
    
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Redux Store</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/cart">Cart</Link>
        </li>
      </ul>
     <p className='m-0'>Cart Items: {items.length}</p>
    </div>
  </div>
</nav>
  );
};

export default Navbar