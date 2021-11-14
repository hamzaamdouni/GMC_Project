import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteDemandeAgent, editdemande } from "../../../JS/actions/visiteur";
import { MdDeleteForever } from "react-icons/md";
import "./DemandeBody.css";

const Clumn = ({ demande }) => {
  const [editDemande, setditDemande] = useState({
    etat: demande.etat,
    statut: demande.statut,
  });

  const dispatch = useDispatch();
  const handleVerifyEtat = (e) => {
    setditDemande({ ...editDemande, etat: e.target.value });
  };
  const handleVerifyStatut = (e) => {
    setditDemande({ ...editDemande, statut: e.target.value });
  };
  useEffect(() => {
    dispatch(editdemande(demande._id, editDemande));
  }, [dispatch, editDemande, demande._id]);

  const handleDeleteDemande = () => {
    if (demande.etat === "Refuser" || demande.statut === "Traité") {
      let result = window.confirm("are you sure to delete that?");
      if (result) {
        dispatch(deleteDemandeAgent(demande._id));
      }
    } else {
      alert("Demande En cour de traitement");
    }
  };
  return (
    <tr>
      <td className="DemandeBodyDelete">
        <MdDeleteForever size={17} onClick={handleDeleteDemande} />
      </td>
      <td>{demande.message}</td>
      <td>{demande.date}</td>
      <td>
        {demande.id_user.prenom} {demande.id_user.nom}
      </td>
      <td>{demande.id_user.adress}</td>
      <td>
        <select
          name="etat"
          className="DemandeSelect"
          onInput={handleVerifyEtat}
        >
          <option value={demande.etat}> {demande.etat} </option>
          <option value="Accepter"> Accepter </option>
          <option value="Refuser"> Refuser </option>
        </select>
      </td>
      <td>
        <select
          name="statut"
          className="DemandeSelect"
          onInput={handleVerifyStatut}
        >
          <option value={demande.statut}> {demande.statut} </option>
          <option value="En cour"> En cour </option>
          <option value="Traité"> Traité </option>
        </select>
      </td>
    </tr>
  );
};

export default Clumn;
