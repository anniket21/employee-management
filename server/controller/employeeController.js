import employee from "../model/employee_Model.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

export const addEmployee = async (req, res) => {
  console.log(res.body);
  try {
    const employeeData = new employee(req.body);
    if (!employeeData) {
      return res.status(404).json({ msg: "User data not found" });
    }

    upload.single("image")(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(500).json({ error: err.message });
      } else if (err) {
        return res.status(500).json({ error: err.message });
      }

      try {
        const saveData = await employeeData.save();
        res.status(200).json(saveData);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const showEmployee = async (req, res) => {
  try {
    const show_emp_data = await employee.find({});
    res.status(200).json(show_emp_data);
  } catch (error) {
    res.status(500).json({ message: error.meaasage });
  }
};

export const getOneEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const employeeExist = await employee.findById(id);
    if (!employeeExist) {
      return res.status(404).json({ msg: "employee not found" });
    }
    res.status(200).json(employeeExist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const employee_exist = await employee.findById(id);
    if (!employee_exist) {
      return res.status(404).json({ msg: "employee not found" });
    }

    const updateData = await employee.findByIdAndUpdate(id, req.body, {
      new: true,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const employee_exist = await employee.findById(id);
    if (!employee_exist) {
      return res.status(404).json({ msg: "employee not found" });
    }
    await employee.findByIdAndDelete(id);

    res.status(200).json({ msg: "user deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
