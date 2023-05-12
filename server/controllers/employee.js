const Employee = require('../models/Employee');
const mongoose = require('mongoose');

exports.createEmployee = async (req, res, next) => {
  const { name, email, age, department, company, salary, status, experience, skills } = req.body;

  // Validate the request body
  if (!name || !email || !age || !department || !company || !salary || !status || !experience || !skills) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const employee = new Employee({
      name,
      email,
      age,
      department,
      company,
      salary,
      status,
      experience,
      skills
    });

    // Add new employee to the database
    const savedEmployee = await employee.save();

    return res.status(201).json({
      employee: savedEmployee,
      success: true,
      message: 'Employee created successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to create employee',
      error: error.message
    });
  }
};

exports.getEmployeeById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findById(id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found"
      });
    }

    return res.status(200).json({
      employee,
      message: "Employee found"
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

exports.getAllEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find();

    if (!employees || employees.length === 0) {
      return res.status(404).json({
        message: 'No employees found'
      });
    }

    return res.status(200).json({
      employees,
      message: 'All employees found'
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

exports.updateEmployee = async (req, res, next) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const employee = await Employee.findByIdAndUpdate(id, updates, { new: true });

    if (!employee) {
      return res.status(404).json({
        message: 'Employee not found'
      });
    }

    return res.status(200).json({
      employee,
      message: 'Employee successfully updated'
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

exports.deleteEmployee = async (req, res, next) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findByIdAndDelete(id);

    if (!employee) {
      return res.status(404).json({
        message: 'Employee not found'
      });
    }

    return res.status(200).json({
      data: null,
      message: 'Employee deleted'
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};
