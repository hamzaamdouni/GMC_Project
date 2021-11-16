import React, { useState } from "react";
import "./LoginAdmin.css";
import LoginImg from "../../../Assets/Administrateur/login.svg";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import { LoginAdministrator } from "../../../JS/actions/administrateur";

const LoginAdmin = () => {
  const [admin, setAdmin] = useState({ email: "", password: "" });

  const history = useHistory();
  const dispatch = useDispatch();

  const handleAdmin = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleLoginAdmin = (e) => {
    dispatch(LoginAdministrator(admin, history));
    setAdmin({
      email: "",
      password: "",
    });
  };
  return (
    <div className="LoginAdminContainer">
      <div className="LoginAdminWraper">
        <div className="LoginAdminImg">
          <img src={LoginImg} alt="LoginImage" />
        </div>
        <div className="LoginAdminContent">
          <div>
            <div className="LoginAdminContentInput">
              <div className="label">
                <label>Email</label>
              </div>
              <input
                type="email"
                placeholder="Enter votre email"
                required
                name="email"
                onInput={handleAdmin}
                value={admin.email}
              />
            </div>
            <div className="LoginAdminContentInput">
              <div className="label">
                <label>Mot de passe</label>
              </div>
              <input
                type="password"
                placeholder="Enter votre mot de passe"
                required
                name="password"
                onInput={handleAdmin}
                value={admin.password}
              />
            </div>
            <div className="LoginAdminContentSubmit">
              <input type="Submit" onClick={handleLoginAdmin} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
