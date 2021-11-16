import React from "react";
import "./Reclamation.css";
import { MdDeleteForever, MdCheck } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import {
  deleteReclamations,
  editReclamations,
} from "../../../../JS/actions/administrateur";

const Reclamation = ({ raclamation }) => {
  const dispatch = useDispatch();
  const editReclamation = { etat: true };

  const handleDelete = () => {
    dispatch(deleteReclamations(raclamation._id));
  };

  const handleViewReclamation = () => {
    dispatch(editReclamations(raclamation._id, editReclamation));
  };
  return (
    <div className="ReclamationContainer">
      <div className="ReclamationContainerHeader">
        <div className="ReclamationHeadercontent">
          <span className="ReclamationNom">{raclamation.nom}</span>{" "}
          {raclamation.etat === true && (
            <IoCheckmarkDoneSharp size={20} className="IconVerification" />
          )}
        </div>
        <span className="ReclamationEmail">{raclamation.email}</span>
      </div>
      <div className="ReclamationContainerBody">
        <div className="ReclamationMessage">
          <p>{raclamation.message}</p>
        </div>
        <div className="ReclamationButton">
          {raclamation.etat === false && (
            <MdCheck
              size={25}
              className="IconVerification"
              onClick={handleViewReclamation}
            />
          )}
          <MdDeleteForever
            size={25}
            className="IconDelete"
            onClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default Reclamation;
