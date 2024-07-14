import React from "react";
import "./EmployeeList.css";

const EmployeeList = ({ employees, toggleForm, setEditMode, handleDelete }) => {
  const handleEdit = (id) => {
    setEditMode(true);
    toggleForm();
    // handleEditButton(id);
  };

  return (
    <div>
      <div className="table-container">
        <div className="add-button">
          <button onClick={() => (setEditMode(false), toggleForm())}>
            Add Employee
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Image</th>
              <th>Category</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr key={emp._id}>
                <td>{index + 1}</td>
                <td>{emp.ename}</td>
                <td>{emp.img}</td>
                <td>{emp.category}</td>
                <td>{emp.email}</td>
                <td>{emp.address}</td>
                <td>{emp.salary}</td>
                <td>
                  <button className="action-btn-edit" onClick={() =>handleEdit(emp._id)}>
                    Edit
                  </button>
                  <button
                    className="action-btn-delete"
                    onClick={() => handleDelete(emp._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
