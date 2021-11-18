const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const serviceSchema = new Schema({
  nom: {
    type: String,
    required: true,
  },
  description: String,
  imageName: String,
});

module.exports = Service = model("service", serviceSchema);
