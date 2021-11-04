const mongoose = require('mongoose')
const { Schema , model}  = mongoose

const commentSchema = new Schema({
    id_user : {
        type: Schema.Types.ObjectId, ref: 'user',
        requirid : true
    },
    id_agent : {
        type: Schema.Types.ObjectId, ref: 'agent',
        requirid : true
    },
    message : {
        type : String,
        required : true
    },
    etat :  {
        type : String,
        required : true,
        default :"NotVerified"
    },
})

module.exports = Comment = model('comment' , commentSchema)