import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Home from './Pages/Home'
import Error from './Pages/Error'
import Login from './Pages/Login_Register/Login';
import Register from './Pages/Login_Register/Register';
import ServicesPage from './Pages/ServicesPage/ServicesPage';
import PrivteRoute from './router/PrivteRoute';
import ProfilUser from './Pages/ProfilPage/ProfilUser';

import './App.css';
import { current, getservices } from './JS/actions/visiteur';


function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token')
  useEffect(() => {
    if(token){dispatch(current())};
  }, [dispatch,token])
  
  
 useEffect(()=>{
    dispatch(getservices())
  },[dispatch])


  return (
    <div>
      <Switch>
        <Route exact path='/' component = {Home}/>
        <Route path='/login' component = {Login} />
        <Route path='/register' component = {Register} />
        <PrivteRoute path= '/services' component = {ServicesPage}/>
        <PrivteRoute path= '/profil' component = {ProfilUser}/>
        <Route path='/*' component = {Error}/>
      </Switch>
    </div>
  );
}

export default App;
