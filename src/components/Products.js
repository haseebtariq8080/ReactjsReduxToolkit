import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import {add} from '../store/cartSlice'

const Products = () => {
  const dispatch = useDispatch();
  const [products, setproducts] = useState([]);
  
  useEffect(() => {
    // dispatch(fetchProducts())
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setproducts(data);
    // };
    // fetchProducts();
  }, []);
  
  const handleAdd = (product)=>{
    dispatch(add(product))
  }
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-12 col-md-3 col-lg-3 mb-4" key={product.id}>
          <div className="card" >
            <img
              src={product.image}
              className="imageSizeFixed"
              alt={product.title}
              
            />
            <div className="card-body">
              <h6 className="card-title ProductTitle">{product.title}</h6>
              <p className="card-text ProductDesc">{product.description}</p>
              <h6 className="card-title ProductPrice">Price ${product.price}</h6>
              <button className="btn btn-primary" onClick={()=>{handleAdd(product)}}>Add to Cart</button>
              {/* <a href="#" className="btn btn-primary">
                Add to Cart
              </a> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
