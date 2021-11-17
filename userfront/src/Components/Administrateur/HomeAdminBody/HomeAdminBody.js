import React from "react";
import { useSelector } from "react-redux";
import Agents from "./Agents/Agents";
import "./HomeAdminBody.css";
import Reclamation from "./Reclamation/Reclamation";

const HomeAdminBody = ({ isAffiche }) => {
  const reclamations = useSelector(
    (state) => state.AdministrateurReducer.reclamations
  );
  const ReclamationVerified = reclamations.filter(
    (reclamation) => reclamation.etat === true
  );
  const ReclamationNotVerified = reclamations.filter(
    (reclamation) => reclamation.etat === false
  );
  console.log(ReclamationNotVerified);
  return (
    <div className="HomeAdminBodyContainer">
      {isAffiche === "Administrateur" && null}
      {isAffiche === "Reclamation" && (
        <>
          {ReclamationNotVerified.length !== 0 && (
            <h1>Reclamation Non Vreifier</h1>
          )}
          <div className="HomeAdminBodyContent">
            {ReclamationNotVerified.map((raclamation) => (
              <Reclamation raclamation={raclamation} />
            ))}
          </div>
          {ReclamationVerified.length !== 0 && <h1>Reclamation Vreifier</h1>}
          <div className="HomeAdminBodyContent">
            {ReclamationVerified.map((raclamation) => (
              <Reclamation raclamation={raclamation} />
            ))}
          </div>
        </>
      )}
      {isAffiche === "Services" && null}
      {isAffiche === "Agents" && <Agents />}
    </div>
  );
};

export default HomeAdminBody;
