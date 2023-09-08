import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const handleData = async () => {
    console.log(email, password);
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = response.data;

      console.log(result);
      if (result.name) {
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/");
      } else {
        alert("Please Enter Correct information!...");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="register">
      <h1>Login</h1>

      <input
        className="inputBox"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Enter Email"
      />
      <input
        className="inputBox"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Enter Password"
      />
      <button className="appButton" onClick={handleData}>
        Login
      </button>
      <hr style={{ marginTop: "20px", marginRight: "720px" }} />
      <p style={{ marginLeft: "130px", cursor: "pointer" }}>
        <Link to="/signup"> Create Account</Link>
      </p>
    </div>
  );
};

export default Login;
