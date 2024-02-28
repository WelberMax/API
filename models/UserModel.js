const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = { User };
