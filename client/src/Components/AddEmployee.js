import React from "react";
import "./AddEmployee.css"; // Import your CSS file for AddEmployee component
import { IoCloseOutline } from "react-icons/io5";


const AddEmployee = ({inputValue,handleOnchange,handleSubmit,toggleForm, isEditMode }) => {

  

  
  return (
    <div className="form-container">
      <h1>{isEditMode ? "Update Employee" : "Add Employee"}</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <IoCloseOutline className="close_icon" onClick={toggleForm} />
        <div className="form-group">
          <label htmlFor="ename">Employee Name</label>
          <input
            type="text"
            id="ename"
            name="ename"
            value={inputValue.ename}
            onChange={handleOnchange}
            placeholder="Enter Employee Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={inputValue.email}
            onChange={handleOnchange}
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary</label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={inputValue.salary}
            onChange={handleOnchange}
            placeholder="Enter Salary"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={inputValue.address}
            onChange={handleOnchange}
            placeholder="Enter Address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={inputValue.category}
            onChange={handleOnchange}
          >
            <option value="IT">IT</option>
            <option value="Development">Development</option>
            <option value="Designing">Designing</option>
            <option value="Management">Management</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="img">Select image:</label>
          <input
            type="file"
            id="img"
            name="img"
            value={inputValue.img}
            onChange={handleOnchange}
            accept="image/*"
          />
        </div>

        <button>{isEditMode ? "Update Employee" : "Add Employee"}</button>
      </form>
    </div>
  );
};

export default AddEmployee;
