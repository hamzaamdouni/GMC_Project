const isAgent = (request , response , next) => {
    if(request.user.role == 'Agent'){
    next()
    } else{
        return response.status(401).send({errors : [{msg : 'Not Agent '}]})
    }
}

module.exports = isAgent