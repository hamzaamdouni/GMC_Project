import React from "react";
import Clumn from "./Clumn";
import "./DemandeBody.css";

const DemandeBody = ({ demandesAgent }) => {
  return (
    <div className="DemandeBodyContainer">
      <h1>Demande Reçu</h1>
      <div className="tbl-header">
        <table cellPadding={0} cellSpacing={0} border={0}>
          <thead>
            <tr>
              <th className="DemandeBodyDelete"> </th>
              <th>Sujet</th>
              <th>Date</th>
              <th>Nom et Prenom</th>
              <th>Localisation</th>
              <th>Etat</th>
              <th>Statut</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table cellPadding={0} cellSpacing={0} border={0}>
          <tbody>
            {demandesAgent.map((demande) => (
              <Clumn demande={demande} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DemandeBody;
