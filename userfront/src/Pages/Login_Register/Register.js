import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../JS/actions/visiteur";
import { Link as LinkR } from "react-router-dom";

import "./Register.css";
import Video from "../../Assets/Visiteur/video.mp4";

const Register = () => {
  const [user, setUser] = useState({
    nom: "",
    prenom: "",
    adress: "",
    phone: "",
    email: "",
    password: "",
    role: "",
    imageName: undefined,
  });
  const dispatch = useDispatch();

  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setUser({ ...user, imageName: e.target.files[0] });
  };
  const handleRegister = (e) => {
    if (user.role === "") {
      alert("Choisir un role");
    } else {
      const formData = new FormData();
      formData.append("nom", user.nom);
      formData.append("prenom", user.prenom);
      formData.append("adress", user.adress);
      formData.append("phone", user.phone);
      formData.append("email", user.email);
      formData.append("password", user.password);
      formData.append("role", user.role);
      formData.append("imageName", user.imageName);
      dispatch(register(formData));
      setUser({
        nom: "",
        prenom: "",
        adress: "",
        phone: "",
        email: "",
        password: "",
        role: "",
        imageName: undefined,
      });
    }

    e.preventDefault();
  };

  return (
    <div>
      <div className="IdentifiyContainer">
        <div className="IdentifiyBg">
          <video
            className="VideoBg"
            autoPlay
            loop
            muted
            src={Video}
            type="video/mp4"
          />
        </div>
        <div className="IdentifiyContent">
          <div className="wrapper">
            <div className="title">Registration Form</div>
            <form
              className="form"
              encType="multipart/form-data"
              onSubmit={handleRegister}
            >
              <div className="inputfield">
                <label>Nom : </label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter votre nom"
                  required
                  name="nom"
                  onInput={handleUser}
                  value={user.nom}
                />
              </div>
              <div className="inputfield">
                <label>Prénom : </label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter votre prénom"
                  required
                  name="prenom"
                  onInput={handleUser}
                  value={user.prenom}
                />
              </div>
              <div className="inputfield">
                <label>Adresse : </label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter votre adresse"
                  required
                  name="adress"
                  onInput={handleUser}
                  value={user.adress}
                />
              </div>
              <div className="inputfield">
                <label>Numéro de téléphone : </label>
                <input
                  class="input"
                  type="number"
                  placeholder="Enter your number"
                  required
                  name="phone"
                  onInput={handleUser}
                  value={user.phone}
                />
              </div>
              <div className="inputfield">
                <label>Email : </label>
                <input
                  class="input"
                  type="email"
                  placeholder="Enter votre email"
                  required
                  name="email"
                  onInput={handleUser}
                  value={user.email}
                />
              </div>
              <div className="inputfield">
                <label>Mot de passe : </label>
                <input
                  class="input"
                  type="password"
                  placeholder="Enter votre mot de passe"
                  required
                  name="password"
                  onInput={handleUser}
                  value={user.password}
                />
              </div>

              <div className="inputfield">
                <label>Image : </label>
                <input
                  class="input"
                  type="file"
                  filename="imageName"
                  onChange={handleFile}
                />
              </div>
              <div className="inputfield">
                <label>Role</label>
                <div className="custom_select">
                  <select name="role" onInput={handleUser}>
                    <option value="Client"></option>
                    <option value="Client">Client</option>
                    <option value="Agent">Agent</option>
                  </select>
                </div>
              </div>
              <div className="inputfield">
                <input type="submit" defaultValue="Register" className="btn" />
              </div>
            </form>
            <div className="option">
              <span>Vous avez un compte ? </span>
              <LinkR to="/login" className="toregister">
                {" "}
                S'identifier
              </LinkR>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
