const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  industry: {
    type: String,
    required: true
  },
  employeesCount: {
    type: Number,
    required: true
  },
  website: {
    type: String,
    required: true
  }
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
