import React from "react";
import "./DemandeHeader.css";

const DemandeHeader = ({ demandesAgent }) => {
  const Attend = demandesAgent.filter(
    (demande) => demande.etat === "En attend"
  );

  const Accepted = demandesAgent.filter(
    (demande) => demande.etat === "Accepter"
  );

  const Refused = demandesAgent.filter((demande) => demande.etat === "Refuser");
  const Treated = demandesAgent.filter(
    (demande) => demande.statut === "Traité"
  );
  const NotTreated = demandesAgent.filter(
    (demande) => demande.statut === "En cour"
  );
  return (
    <div className="DemandeHeaderContainer">
      <div className="DemandeHeaderContent">
        <span className="DemandeHeaderContentTitle">Demande En Attend</span>
        <span className="DemandeHeaderContentNumber">{Attend.length}</span>
      </div>

      <div className="DemandeHeaderContent">
        <span className="DemandeHeaderContentTitle">Demande Accepter</span>
        <span className="DemandeHeaderContentNumber">{Accepted.length}</span>
      </div>

      <div className="DemandeHeaderContent">
        <span className="DemandeHeaderContentTitle">Demande Refuser</span>
        <span className="DemandeHeaderContentNumber">{Refused.length}</span>
      </div>

      <div className="DemandeHeaderContent">
        <span className="DemandeHeaderContentTitle">Demande En cour</span>
        <span className="DemandeHeaderContentNumber">{NotTreated.length}</span>
      </div>

      <div className="DemandeHeaderContent">
        <span className="DemandeHeaderContentTitle">Demande Traiter</span>
        <span className="DemandeHeaderContentNumber">{Treated.length}</span>
      </div>
    </div>
  );
};

export default DemandeHeader;
