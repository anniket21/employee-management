import React, { useState, useEffect } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import { useNavigate } from "react-router-dom";

const EmployeeDetail = () => {
  const Navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);
  const [isEditMode, setIsEditForm] = useState(false);
  const [employees, setEmployees] = useState([]);

  const [inputValue, setInputValue] = useState({
    ename: "",
    email: "",
    salary: "",
    address: "",
    category: "",
    img: "",
  });

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/read_employee");
        if (!response.ok) {
          throw new Error("Failed to fetch employees");
        }
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchData();
  }, []);

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch("http://localhost:8000/api/add_employee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue),
      });

      if (response.ok) {
        console.log("Employee added successfully!");
        Navigate("/employee_detail");
        setShowForm(false);

        const refetchResponse = await fetch(
          "http://localhost:8000/api/read_employee"
        );
        if (!refetchResponse.ok) {
          throw new Error("Failed to fetch employees");
        }
        const newData = await refetchResponse.json();
        setEmployees(newData);
      } else {
        console.log("Failed to add employee");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/delete/${id}`, {
        method: "DELETE"
      });

      if (response.ok) {
        console.log("Employee deleted successfully!");
        Navigate("/employee_detail");
        setShowForm(false);

        const refetchResponse = await fetch("http://localhost:8000/api/read_employee");
        if (!refetchResponse.ok) {
          throw new Error("Failed to fetch employees");
        }
        const newDataAfterDelete = await refetchResponse.json();
        setEmployees(newDataAfterDelete);
      } else {
        console.log("Error deleting employee");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const setEditMode = (flag) => {
    setIsEditForm(flag);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <SideBar />
        <EmployeeList
          toggleForm={toggleForm}
          setEditMode={setEditMode}
          employees={employees}
          handleDelete={handleDelete}
        />

        {showForm && (
          <AddEmployee
            toggleForm={toggleForm}
            isEditMode={isEditMode}
            handleOnchange={handleOnchange}
            handleSubmit={handleSubmit}
            inputValue={inputValue}
          />
        )}
      </div>
    </div>
  );
};

export default EmployeeDetail;
