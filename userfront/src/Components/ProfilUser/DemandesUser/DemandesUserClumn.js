import React, { useState } from "react";
import "./DemandesUser.css";

import { MdDeleteForever, MdModeEditOutline } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import { useDispatch } from "react-redux";
import {
  deleteDemandeUser,
  editdemandeUser,
} from "../../../JS/actions/visiteur";

const DemandesUserClumn = ({ demandeUser }) => {
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [editDemande, setditDemande] = useState({
    message: demandeUser.message,
  });

  const handleEdit = (e) => {
    setditDemande({ ...editDemande, message: e.target.value });
  };
  const handleDeleteDemande = () => {
    if (demandeUser.etat === "Refuser" || demandeUser.statut === "Traité") {
      let result = window.confirm("are you sure to delete that?");
      if (result) {
        dispatch(deleteDemandeUser(demandeUser._id));
      }
    } else {
      alert("Demande En cour de traitement");
    }
  };

  const handleEditDemande = () => {
    if (isEdit) {
      dispatch(editdemandeUser(demandeUser._id, editDemande));
    }
    setIsEdit(!isEdit);
  };

  return (
    <tr>
      <td className="DemandeUserBodyBtnEdit">
        {isEdit ? (
          <GiCheckMark size={17} onClick={handleEditDemande} />
        ) : (
          <MdModeEditOutline size={17} onClick={handleEditDemande} />
        )}
      </td>
      <td className="DemandeUserBodyBtnDelete">
        <MdDeleteForever size={17} onClick={handleDeleteDemande} />
      </td>
      <td>
        {demandeUser.id_service.nom} - {demandeUser.id_category.nom}
      </td>
      <td className="DemandeUserBodySujet">
        {isEdit ? (
          <textarea
            required
            name="message"
            value={editDemande.message}
            onInput={handleEdit}
          />
        ) : (
          <span>{demandeUser.message}</span>
        )}
      </td>
      <td>{demandeUser.date}</td>
      <td>{demandeUser.etat}</td>
    </tr>
  );
};

export default DemandesUserClumn;
