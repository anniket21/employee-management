import React from 'react'
import Header from './Header';
import SideBar from './SideBar';
import AddEmployee from './AddEmployee';

const DashBoardpg3 = () => {
  return (
    <div>
<Header/>
<div className="container">
        <SideBar />
        <AddEmployee/>
        
      </div>
    </div>
    
  )
}

export default DashBoardpg3