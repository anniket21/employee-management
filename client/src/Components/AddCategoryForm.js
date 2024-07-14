import React from "react";
import AddCategory from "./AddCategory";
import Header from './Header';
import SideBar from './SideBar';
const DashBoardpg4 = () => {
  return (
   
      <div>
        <Header />
        <div className="container">
          <SideBar />
          <AddCategory />
        </div>
      </div>
   
  );
};

export default DashBoardpg4;
