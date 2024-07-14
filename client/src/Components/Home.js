import React from 'react'
import { useNavigate } from "react-router-dom";
import './Home.css';
const Home = () => {

  let navigate = useNavigate();

  let UserName = JSON.parse(localStorage.getItem('users'));

  let handleLogout = (e) => {
    localStorage.removeItem('loggedin',);
    navigate('/login');
  }

  return (
    <><div>Home</div>
    <h1>Welcome - {UserName.uname}</h1>
    <button onClick={handleLogout} type='button'>Logout</button>
    </>
    
 
  )
}

export default Home