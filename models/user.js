const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  imageName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["Client", "Agent"],
  },
  etat: {
    type: String,
    default: "NotVerified",
  },
});

module.exports = User = model("user", userSchema);
