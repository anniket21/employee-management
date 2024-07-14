import React from "react";
import "./AddCategory.css";

const Header = () => {
  return (
    <>
      <div className="category-button">
        <button>Add Category</button>
      </div>

      <div className="categoryContainer">
        <h1>List of Category</h1>
        <div>
          <h1>IT</h1>
          <h1>Development</h1>
          <h1>Designing</h1>
          <h1>Management</h1>
          {/* <ul>
            <li className="category-item">IT</li>
            <li className="category-item">Development</li>
            <li className="category-item">Designing</li>
            <li className="category-item">Management</li>
          </ul> */}
        </div>
      </div>
    </>
  );
};

export default Header;
