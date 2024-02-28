const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema(
    {    
        id: {
          type: Number,
        },
        name: {
          type: String,
        },
    },  
  { timestamps: true }
);
const Category = mongoose.model("Category", categorySchema);
module.exports = {Category, categorySchema};
