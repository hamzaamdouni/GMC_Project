const mongoose = require('mongoose')
const { Schema , model}  = mongoose

const reclamationSchema = new Schema({
    nom : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    },
    etat :  {
        type : Boolean,
        required : true,
        default : false
    },
})

module.exports = Reclamation = model('reclamation' , reclamationSchema)