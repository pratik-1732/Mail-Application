const mongoose = require("mongoose");

const SentEmailSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  // Add additional fields like sent date, etc. if needed
});

module.exports = mongoose.model("SentEmail", SentEmailSchema);
