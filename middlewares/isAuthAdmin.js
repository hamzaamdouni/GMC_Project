const jwt = require('jsonwebtoken');
const admin = require('../models/admin');

const isAuthAdmin = async (request , response , next) =>{
    try {
        const token = request.headers['authorization']
        if(!token){
            return response.status(401).send({errors : [{msg : 'Not Authorized '}]})
        }
    
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        if(!decoded){
            return response.status(401).send({errors : [{msg : 'Not Authorized '}]})
        }

        const findAdmin = await admin.findById(decoded._id)
        request.admin = findAdmin
        if(findAdmin){
            next();
        }else{
            return response.status(401).send({errors : [{msg : 'Not Authorized'}]})
        }
        
    } catch (error) {
        return response.status(401).send({errors : [{msg : 'Not Authorized '}]})
    }
}

module.exports = isAuthAdmin