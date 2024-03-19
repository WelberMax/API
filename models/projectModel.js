const mongoose = require("mongoose");
const { Schema } = mongoose;
const { categorySchema } = require("./categoryModel");
const { serviceSchema } = require("./serviceModel");

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
    cost: {
      type: Number,
      default: 0,
    },

    services: {
      type: [serviceSchema],
    },

  },

  { timestamps: true }
);
const Project = mongoose.model("Project", projectSchema);
module.exports = { Project };
