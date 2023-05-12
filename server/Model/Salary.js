const mongoose = require('mongoose');

const salarySchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },
  month: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
});

const Salary = mongoose.model('Salary', salarySchema);

module.exports = Salary;
