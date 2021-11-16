import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivteRouteAdmin = ({ component, ...rest }) => {
  const token = localStorage.getItem("token");
  const isAuthAdmin = useSelector(
    (state) => state.AdministrateurReducer.isAuthAdmin
  );
  if (!token && !isAuthAdmin) {
    return <Redirect to="/" />;
  } else {
    return <Route {...rest} component={component} />;
  }
};

export default PrivteRouteAdmin;
