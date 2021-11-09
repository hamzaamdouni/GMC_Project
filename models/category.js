const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const categorySchema = new Schema({
  id_service: {
    type: Schema.Types.ObjectId,
    ref: "service",
    requirid: true,
  },
  nom: {
    type: String,
    required: true,
  },
});

module.exports = Category = model("category", categorySchema);
