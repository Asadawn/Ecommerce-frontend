import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const collectData = () => {
    console.log(name, email, password);
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        className="inputBox"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Enter Name"
      />
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
      <button className="appButton" onClick={collectData}>
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;