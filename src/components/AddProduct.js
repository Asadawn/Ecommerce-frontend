import React, { useState } from "react";
import axios from "axios";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const addProduct = async () => {
    console.log(name, price, category, company);
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let promise = await axios.post(
      "http://localhost:5000/add-product",
      {
        name,
        price,
        category,
        company,
        userId,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = promise.data;
    console.log(result);
    setName("");
    setCategory("");
    setPrice("");
    setCompany("");
  };

  return (
    <div className="product">
      <h1>Add Product</h1>
      <input
        type="text"
        placeholder="Enter Product Name"
        className="inputBox"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {error && !name && <span className="invalid">Enter valid name</span>}
      <input
        type="text"
        placeholder="Enter Product Price"
        className="inputBox"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      {error && !price && <span className="invalid">Enter price</span>}
      <input
        type="text"
        placeholder="Enter Product Category"
        className="inputBox"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      {error && !category && (
        <span className="invalid">Enter valid category</span>
      )}
      <input
        type="text"
        placeholder="Enter Product Company"
        className="inputBox"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />
      {error && !company && (
        <span className="invalid">Enter valid Company</span>
      )}

      <button className="appButton" onClick={addProduct}>
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
