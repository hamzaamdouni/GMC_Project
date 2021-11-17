import React, { useEffect, useState } from "react";
import "./OneAgentModal.css";
import { RiUser3Fill } from "react-icons/ri";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { FaUserGraduate, FaUserTie } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteUsers, VerifyUser } from "../../../../JS/actions/administrateur";

const OneAgentModal = ({ agentToShow, setIsOpen }) => {
  const [isVerified, setIsVerified] = useState({
    etat: agentToShow.id_agent.etat,
  });
  const dispatch = useDispatch();
  const handleOpen = () => {
    setIsOpen(false);
  };

  const handleDelete = () => {
    let result = window.confirm("are you sure to delete that?");
    if (result) {
      dispatch(deleteUsers(agentToShow.id_agent._id));
      setIsOpen(false);
    }
  };

  const handleVerified = () => {
    isVerified.etat === "NotVerified"
      ? setIsVerified({ etat: "Verified" })
      : setIsVerified({ etat: "NotVerified" });
  };

  useEffect(() => {
    dispatch(VerifyUser(agentToShow.id_agent._id, isVerified));
  }, [dispatch, agentToShow.id_agent._id, isVerified]);

  return (
    <div className="OneAgentModalContainer">
      <div className="OneAgentModalWrapper">
        <div className="OneAgentModalImage">
          <img src="" alt="" />
          <span>
            {agentToShow.id_service.nom} - {agentToShow.id_category.nom}
          </span>
          <span>{agentToShow.id_agent.adress}</span>
        </div>
        <div className="OneAgentModalInfo">
          <div className="OneAgentModalInfoContent">
            <RiUser3Fill className="OneAgentModalInfoIcon" />
            <span>
              {agentToShow.id_agent.prenom} {agentToShow.id_agent.nom}
            </span>
          </div>
          <div className="OneAgentModalInfoContent">
            <MdEmail className="OneAgentModalInfoIcon" />
            <span>{agentToShow.id_agent.email}</span>
          </div>
          <div className="OneAgentModalInfoContent">
            <MdLocalPhone className="OneAgentModalInfoIcon" />
            <span>{agentToShow.id_agent.phone}</span>
          </div>
          <div className="OneAgentModalInfoContent">
            <FaUserGraduate className="OneAgentModalInfoIcon" />
            <span>{agentToShow.calification}</span>
          </div>
          <div className="OneAgentModalInfoContent">
            <FaUserTie className="OneAgentModalInfoIcon" />
            <span>{agentToShow.experience} ans</span>
          </div>
          <div className="OneAgentModalInfoContent">
            <span>{agentToShow.description}</span>
          </div>
          <div className="OneAgentModalInfoBtn">
            <button onClick={handleVerified}> {isVerified.etat} </button>
            <button onClick={handleDelete}> Supprimer </button>
            <button onClick={handleOpen}> Fermer </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneAgentModal;
