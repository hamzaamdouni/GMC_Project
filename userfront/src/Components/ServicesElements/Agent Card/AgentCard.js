import React from "react";

import "./AgentCard.css";

const AgentCard = ({ oneAgent, setModalIsOpen, setIdagent }) => {
  const idagentselected = oneAgent._id;

  const handleIsOpen = () => {
    setModalIsOpen(true);
    setIdagent(idagentselected);
  };

  return (
    <div className="container">
      <div className="cover-photo">
        <img
          src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          alt="coverphoto"
          className="profile"
        />
      </div>
      <div className="profile-name">
        {oneAgent.id_agent.nom} {oneAgent.id_agent.prenom}
      </div>
      <div className="about">
        <p className="CardService">
          {oneAgent.id_service.nom} - {oneAgent.id_category.nom}
        </p>
        <p> {oneAgent.id_agent.adress} </p>
      </div>
      <button className="msg-btn" onClick={handleIsOpen}>
        Voir Profil
      </button>
    </div>
  );
};

export default AgentCard;
