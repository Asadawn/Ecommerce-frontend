import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      const result = response.data;
      setProducts(result);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/product/${id}`);
      alert("Record is deleted!..");
      getProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <ul>
        <li>
          <b>S.No</b>
        </li>
        <li>
          <b>Company </b>
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
        <li>
          <b>Operation </b>
        </li>
      </ul>
      {products.map((item, index) => (
        <ul key={item._id}>
          <li>{index + 1}</li>
          <li>{item.company}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.category}</li>
          <li>
            <button onClick={() => deleteProduct(item._id)}>Delete</button>
            <button>
              <Link to={"/update/" + item._id}>Update</Link>
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ProductList;
