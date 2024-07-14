import React from "react";
import Header from "./Header";
import DashBoardContent from "./DashBoardContent";
import SideBar from './SideBar'
const Dashboardpg1 = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <SideBar />
        <DashBoardContent/>
      </div>
    </div>
  );
};

export default Dashboardpg1;
