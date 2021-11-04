import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PrivteRoute = ({component , ...rest}) => {
    const token = localStorage.getItem('token')
    const isAuth = useSelector(state => state.visiteurReducer.isAuth)
    if(!token && !isAuth){
        return <Redirect to = '/'/>
    }else{
        return <Route {...rest} component = { component }/>
    }
}

export default PrivteRoute