import React from "react";
import DemandesUserClumn from "./DemandesUserClumn";

import "./DemandesUser.css";

const DemandesUser = ({ demandesUser }) => {
  return (
    <div className="DemandeUserBodyContainer">
      <h1>Mes Demandes</h1>
      <div className="tbl-headerUser">
        <table cellPadding={0} cellSpacing={0} border={0}>
          <thead>
            <tr>
              <th className="DemandeUserBodyBtnEdit"> </th>
              <th className="DemandeUserBodyBtnDelete"> </th>
              <th>Service</th>
              <th className="DemandeUserBodySujet">Sujet</th>
              <th>Date</th>
              <th>Etat</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-contentUser">
        <table cellPadding={0} cellSpacing={0} border={0}>
          <tbody>
            {demandesUser.map((demandeUser) => (
              <DemandesUserClumn demandeUser={demandeUser} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DemandesUser;
