import React from 'react'
import { Outlet,Navigate } from 'react-router-dom';
const ProtectedRoutes = () => {

    let loggedin = localStorage.getItem('loggedin');
    // let auth = loggedin;

  return loggedin ? <Outlet /> : <Navigate to={"/login"}/>;
 
}

export default ProtectedRoutes