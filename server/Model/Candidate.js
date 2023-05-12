const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  }
});

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;
