import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Agents.css";
import OneAgent from "./OneAgent";
import OneAgentModal from "./OneAgentModal";

const Agents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [agentToShow, setAgentToShow] = useState({});

  const agents = useSelector((state) => state.AdministrateurReducer.agents);

  return isOpen ? (
    <OneAgentModal agentToShow={agentToShow} setIsOpen={setIsOpen} />
  ) : (
    <div className="AgentsContainer">
      <div className="tbl-header">
        <table cellPadding={0} cellSpacing={0} border={0}>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Service</th>
              <th>Category</th>
              <th>Etat</th>
              <th className="AgentCellule"></th>
            </tr>
          </thead>
        </table>
        <div className="tbl-content">
          <table cellPadding={0} cellSpacing={0} border={0}>
            <tbody>
              {agents.map((agent) => (
                <OneAgent
                  agent={agent}
                  setAgentToShow={setAgentToShow}
                  setIsOpen={setIsOpen}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Agents;
