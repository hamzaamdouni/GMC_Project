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
          src={`uploads/${oneAgent.id_agent.imageName}`}
          alt="coverphoto"
          className="profile"
          // style={
          //   "background-mage: `../../../Assets/Images/${oneAgent.id_agent.imageName}`"
          // }
          style={{
            backgroundImage: `url(uploads/${oneAgent.id_agent.imageName})`,
          }}
        />
      </div>
      <div className="profile-name">
        {oneAgent.id_agent.nom} {oneAgent.id_agent.prenom}{" "}
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
