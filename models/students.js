const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: Number,
  phone: {
      type: String,
      require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
});

const Students = mongoose.model("students", studentSchema);

module.exports = Students