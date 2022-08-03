import { createSlice } from "@reduxjs/toolkit";

const Status = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: Status.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payloads;
    },
    setStatus(state,action){
        state.status = action.payloads;
    }
  },
});

export const {setProducts, setStatus} = productSlice.actions;
export default productSlice.reducer;
// Thunks

export function fetchProducts() {
  return async function fetchProductsThunk(dispatch, getState) {
    dispatch(setStatus(Status.LOADING))
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
     dispatch(setProducts(data)); 
    dispatch(setStatus(Status.IDLE));
    } catch (c) {
        console.log(productSlice);
        dispatch(setStatus(Status.ERROR))
    }
  };
}
