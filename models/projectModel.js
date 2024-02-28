const mongoose = require("mongoose");
const { Schema } = mongoose;
const { categorySchema } = require("./categoryModel");

const projectSchema = new Schema(
  {
    id: {
      type: Number,
    },
    name: {
      type: String,
    },
    budget: {
      type: Number,
    },
    category: {
      type: [categorySchema],
    },
  },

  { timestamps: true }
);
const Project = mongoose.model("Project", projectSchema);
module.exports = { Project };
