import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from './Components/Login'
import RegistrationForm from "./Components/RegistrationForm";
import Home from "./Components/Home";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import Dashboard from "./Components/Dashboard";
import EmployeeDetail from "./Components/EmployeeDetail";
import AddEmployeeForm from "./Components/AddEmployeeForm";
import DashBoardpg4 from "./Components/AddCategoryForm";
function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<RegistrationForm/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/employee_detail" element={<EmployeeDetail/>}/>
        <Route path="/add_employee_form" element={<AddEmployeeForm/>}/>
        <Route path="/add_category_form" element={<DashBoardpg4/>}/>
        <Route path="/" element={<ProtectedRoutes/>}>
        <Route path="/" element={<Home/>}/>
        </Route>

        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
