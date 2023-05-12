const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  employees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee'
    }
  ],
  services: {
    type: [String],
    required: true
  }
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
