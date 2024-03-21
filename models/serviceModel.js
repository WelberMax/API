const mongoose = require("mongoose");
const { Schema } = mongoose;

const serviceSchema = new Schema(
    {    
        name: {
          type: String,
        },
        cost: {
          type: Number,
        },
        description: {
          type: String,
        },
    },  
  { timestamps: true }
);
const Service = mongoose.model("Service", serviceSchema);
module.exports = { Service, serviceSchema};