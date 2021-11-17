import React from "react";
import "./Agents.css";
import { IoEyeSharp } from "react-icons/io5";

const OneAgent = ({ agent, setIsOpen, setAgentToShow }) => {
  const handleOpen = () => {
    setIsOpen(true);
    setAgentToShow(agent);
  };
  return (
    <>
      <tr className="OneAgentContainer">
        <td>{agent.id_agent.nom}</td>
        <td>{agent.id_agent.prenom}</td>
        <td>{agent.id_service.nom}</td>
        <td>{agent.id_category.nom}</td>
        <td>{agent.id_agent.etat}</td>
        <td className="AgentCellule">
          <IoEyeSharp size={18} onClick={handleOpen} />
        </td>
      </tr>
    </>
  );
};

export default OneAgent;
