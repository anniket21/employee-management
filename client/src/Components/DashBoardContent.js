import React from 'react'
import './DashBoardContent.css';

const DashBoardContent = () => {
  return (
    <div className="main-content">
          <div className="dashboard-section">
            <div className="dashboard-item">
              <h2>Admin</h2>
              <h1>1</h1>
              {/* Add more content here if needed */}
            </div>
            <div className="dashboard-item">
              <h2>Employee</h2>
              <h1>200</h1>
              {/* Add more content here if needed */}
            </div>
            <div className="dashboard-item">
              <h2>Full Time Employee</h2>
              <h1>75</h1>
              {/* Add more content here if needed */}
            </div>
            <div className="dashboard-item">
              <h2>Department</h2>
              <h1>2</h1>
              {/* Add more content here if needed */}
            </div>
           
          </div>
        </div>
  )
}

export default DashBoardContent