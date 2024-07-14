import React from 'react';
import { AiOutlineDashboard } from "react-icons/ai";
import { GrUserManager } from "react-icons/gr";
import { TbCategory } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import './SideBar.css';

const SideBar = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          <li>
            <Link className='iconImage' to="/dashboard">
              <AiOutlineDashboard /> <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link className='iconImage' to="/employee_detail">
              <GrUserManager /> <span>Manage Employee</span>
            </Link>
          </li>
          <li>
            <Link className='iconImage' to="/add_category_form">
              <TbCategory /> <span>Category</span>
            </Link>
          </li>
          <li>
            <Link className='iconImage' to="">
              <CgProfile /> <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link className='iconImage' to="">
              <AiOutlineLogout /> <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
