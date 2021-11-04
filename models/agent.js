const mongoose = require('mongoose')
const { Schema , model}  = mongoose

const agentSchema = new Schema({
    id_agent : {
        type: Schema.Types.ObjectId, ref: 'user',
        requirid : true
    },
    id_service : {
        type: Schema.Types.ObjectId, ref: 'service',
        requirid : true
    },
    id_category : {
        type: Schema.Types.ObjectId, ref: 'category',
        requirid : true
    },
    birthday : {
        type : Date,
        default : Date.now()
    },
    gender : {
        type : String,
        required : true,
        enum : ['Male' , 'Female']
    },
    calification : {
        type : String,
        required : true,
        default : 0
    },
    experience : {
        type : Number,
        required : true,
        default : 0
    },
    description :  {
        type : String,
        required : true,
    },
    note : {
        type : Number,
        default : 0
    },
})

module.exports = Agent = model('agent' , agentSchema)