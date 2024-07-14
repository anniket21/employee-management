import express from "express";
import { updateEmployee, removeEmployee, getOneEmployee, showEmployee, addEmployee } from "../controller/employeeController.js";
const route = express.Router();

route.post("/add_employee", addEmployee);
route.get("/read_employee", showEmployee);
route.get("/update_employee/:id",getOneEmployee);
route.put("/update/:id", updateEmployee)
route.delete("/delete/:id",removeEmployee)



export default route;