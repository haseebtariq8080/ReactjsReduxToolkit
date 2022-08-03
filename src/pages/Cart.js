import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {remove} from '../store/cartSlice'
const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (productId) =>{
    dispatch(remove(productId));
  }
  return (
    <div className="container">
      <h3>Cart</h3>
      <div className="row">
        {cartItems.map((cartItem) => (
          <div className="col-12 col-md-12 col-lg-12 mb-4" key={cartItem.id}>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-2">
                    <img
                      src={cartItem.image}
                      className="imageSizeFixed"
                      alt={cartItem.title}
                    />
                  </div>
                  <div className="col-4">
                    <div className="d-flex align-items-center h-100">
                    <h6 className="card-title cartItemTitle">
                      {cartItem.title}
                    </h6>
                    </div>
                  </div>
                  <div className="col-4">
                  <div className="d-flex align-items-center h-100">
                  <h6 className="card-title cartItemPrice">
                      Price ${cartItem.price}
                    </h6>
                    </div>
                  </div>
                  <div className="col-2">
                  <div className="d-flex align-items-center h-100">
                  <button className="btn btn-danger" onClick={()=>{handleRemove(cartItem.id)}}>Remove</button>
                  </div>
                  </div>
                </div>
                
                {/* <a href="#" className="btn btn-primary">
                Add to Cart
              </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
