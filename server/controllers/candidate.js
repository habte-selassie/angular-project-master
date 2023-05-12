const Candidate = require('../models/Candidate');

exports.createCandidate = async (req, res, next) => {
  const { name, email, age, department, company, status, address, skills } = req.body;

  // Validate the request body
  if (!name || !email || !age || !department || !company || !status || !address || !skills) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const candidate = new Candidate({
      name,
      email,
      age,
      department,
      company,
      status,
      address,
      skills
    });

    // Add new candidate to the database
    const savedCandidate = await candidate.save();

    return res.status(201).json({
      candidate: savedCandidate,
      success: true,
      message: 'Candidate created successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to create candidate',
      error: error.message
    });
  }
};

exports.getCandidateById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const candidate = await Candidate.findById(id);

    if (!candidate) {
      return res.status(404).json({
        message: "Candidate not found"
      });
    }

    return res.status(200).json({
      candidate,
      message: "Candidate found"
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

exports.getAllCandidates = async (req, res, next) => {
  try {
    const candidates = await Candidate.find();

    if (!candidates || candidates.length === 0) {
      return res.status(404).json({
        message: 'No candidates found'
      });
    }

    return res.status(200).json({
      candidates,
      message: 'All candidates found'
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

exports.updateCandidate = async (req, res, next) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const candidate = await Candidate.findByIdAndUpdate(id, updates, { new: true });

    if (!candidate) {
      return res.status(404).json({
        message: 'Candidate not found'
      });
    }

    return res.status(200).json({
      candidate,
      message: 'Candidate successfully updated'
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

exports.deleteCandidate = async (req, res, next) => {
  const { id } = req.params;

  try {
    const candidate = await Candidate.findByIdAndDelete(id);

    if (!candidate) {
      return res.status(404).json({
        message: 'Candidate not found'
      });
    }

    return res.status(200).json({
      data: null,
      message: 'Candidate deleted'
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};
