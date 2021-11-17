import React, { useEffect, useState } from "react";
import "./RegisterAgent.css";

import imgRegister from "../../Assets/User/registeragent.svg";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, registerAgent } from "../../JS/actions/visiteur";
import { useHistory } from "react-router";

const RegisterAgent = () => {
  const [isService, setIsService] = useState();
  const [addAgent, setAddAgent] = useState({
    nomcategory: "",
    calification: "",
    experience: "",
    description: "",
  });

  const isload = useSelector((state) => state.visiteurReducer.isload);
  const services = useSelector((state) => state.visiteurReducer.services);
  const categorys = useSelector((state) => state.visiteurReducer.categorys);

  const handleService = (e) => {
    setIsService(e.target.value);
  };

  const handleAddAgent = (e) => {
    setAddAgent({ ...addAgent, [e.target.name]: e.target.value });
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerAgent(addAgent, history));
    setAddAgent({
      nomcategory: "",
      calification: "",
      experience: "",
      description: "",
    });
    alert("Vous ete enregistrer !!!");
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory(isService));
  }, [dispatch, isService]);

  return (
    <div className="RegisterAgentContainer">
      <div className="RegisterAgentImage">
        <img src={imgRegister} alt="register" />
      </div>
      <div className="RegisterAgentContent">
        <h1>Agent Registration</h1>
        <div className="RegisterAgentWrap">
          <div className="RegisterAgentWrapSelect">
            <select name="service" onInput={handleService}>
              <option value={"-- Toutes les service--"}>
                -- Choisir un service--
              </option>
              {isload
                ? null
                : services.map((el) => (
                    <option value={el.nom}>{el.nom}</option>
                  ))}
            </select>
          </div>
          <div className="RegisterAgentWrapSelect">
            <select name="nomcategory" onInput={handleAddAgent}>
              <option value={addAgent.nomcategory}>
                -- Choisir une category--
              </option>
              {isload
                ? null
                : categorys.map((el) => (
                    <option value={el.nom}>{el.nom}</option>
                  ))}
            </select>
          </div>
        </div>
        <div className="RegisterAgentWrap">
          <div className="input-box">
            <input
              type="text"
              required
              name="calification"
              value={addAgent.calification}
              onInput={handleAddAgent}
            />
            <label>Enter votre Calification</label>
          </div>
          <div className="input-box">
            <input
              type="number"
              required
              name="experience"
              value={addAgent.experience}
              onInput={handleAddAgent}
            />
            <label>Enter votre année d'experience</label>
          </div>
        </div>
        <div className="RegisterAgentWrap">
          <div className="message-box">
            <textarea
              required
              name="description"
              value={addAgent.description}
              onInput={handleAddAgent}
            />
            <label>Enter votre description</label>
          </div>
        </div>
        <div className="RegisterAgentBtn">
          <input
            type="submit"
            defaultValue="Send Message"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterAgent;
