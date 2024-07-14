import React, { useState } from "react";
import "./Form.css"; // Import your CSS file
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {

let navigate = useNavigate();

  let [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  let handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value
    });
  };

  let handleLogin = (e)=>{
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("users"));
    if( inputData.email === loggedUser.email &&  inputData.password === loggedUser.password ){
      localStorage.setItem('loggedin', true);
        navigate('/');
    }
    else {
      alert('Incorrect Credential');
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={inputData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={inputData.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>
        <div className="form-links">
          <span>Forgot Password?</span>
        </div>
        <div className="form-links">
          <p>
            Don't have an account?<span><Link to={"/register"}>Sign Up</Link> </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
