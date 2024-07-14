import React, { useState } from 'react';
import './Form.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
 
 const navigate = useNavigate();

  let [inputData,setInputData]=useState({

    uname:"",
    email:"",
    password:""
  });

  let handleInputChange = (e)=>{
    const {name, value} = e.target;
    setInputData({
      ...inputData,
      [name] : value
  })
  }

  let handleSubmit = (e)=>{
    e.preventDefault();
    localStorage.setItem("users",JSON.stringify(inputData));
    navigate('/login');
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} >
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Username"
          name='uname'
          onChange={handleInputChange}
          value={inputData.uname}
          
        />
        <input
          type="email"
          placeholder="Email"
          name='email'
          onChange={handleInputChange}
          value={inputData.email}
          
        />
        <input
          type="password"
          placeholder="Password"
          name='password'
          onChange={handleInputChange}
          value={inputData.password}
         
        />
        
        <button type="submit">Register</button>
        <div className="form-links">
          <p>Already have an account?<span ><Link to={'/login'}>Login</Link></span></p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
