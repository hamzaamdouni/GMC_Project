const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const demandeSchema = new Schema({
  id_user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    requirid: true,
  },
  id_agent: {
    type: Schema.Types.ObjectId,
    ref: "agent",
    requirid: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  etat: {
    type: String,
    required: true,
    default: "Accepted",
  },
  statut: {
    type: String,
    required: true,
    default: "En cour",
  },
});

module.exports = Demande = model("demande", demandeSchema);
