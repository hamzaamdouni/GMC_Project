const user = require("../models/user")

const isVerifiedUser = async(request , response , next) => {

    const {email} = request.body
    const findUser = await user.findOne({email})
    if(findUser.etat == 'Verified'){
    next()
    } else{
        return response.status(401).send({errors : [{msg : 'Not Verified Please contact the Admin'}]})
    }
}

module.exports = isVerifiedUser