import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const promise = await axios.get("http://localhost:5000/products");
    const result = promise.data;
    console.log(result);
    setProducts(result);
    console.log(products);
  };
  return (
    <div className="product-list">
      <h1>Product List</h1>
      <ul>
        <li>
          <b>S.No</b>
        </li>
        <li>
          <b>Name </b>
        </li>
        <li>
          <b>Price </b>
        </li>
        <li>
          <b>Category </b>
        </li>
      </ul>
      {products.map((value, index) => (
        <ul key={index + 1}>
          <li>{index + 1}</li>
          <li>{value.name}</li>
          <li>{value.price}</li>
          <li>{value.category}</li>
        </ul>
      ))}
    </div>
  );
};

export default ProductList;
