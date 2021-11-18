import React, { useState } from "react";
import "./GererService.css";
import { MdDeleteForever, MdModeEditOutline, MdCheck } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  deleteServices,
  editServices,
} from "../../../../../JS/actions/administrateur";

const OneService = ({ Service }) => {
  const [isEdit, setisEdit] = useState(false);
  const [editService, setEditService] = useState({
    nom: Service.nom,
    description: Service.description,
  });

  const handleEditeService = (e) => {
    setEditService({ ...editService, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setisEdit(!isEdit);
  };
  const dispatch = useDispatch();
  const handelSubmit = () => {
    dispatch(editServices(Service._id, editService));
    setisEdit(!isEdit);
  };

  const handleDelete = () => {
    dispatch(deleteServices(Service._id));
  };
  return (
    <>
      <tr className="OneServiceContainer">
        <td className="OneServiceCelluleImage">
          <img src={`../uploads/${Service.imageName}`} alt="" />
        </td>
        <td className="OneServiceCelluleNom">
          {isEdit ? (
            <input
              className="Nom"
              type="text"
              name="nom"
              onInput={handleEditeService}
              value={editService.nom}
            />
          ) : (
            Service.nom
          )}
        </td>
        <td className="OneServiceCelluleTextArea">
          {isEdit ? (
            <textarea
              className="description"
              type="text"
              name="description"
              onInput={handleEditeService}
              value={editService.description}
            />
          ) : (
            Service.description
          )}
        </td>

        <td className="OneServiceCelluleIcon">
          {isEdit ? (
            <MdCheck size={18} onClick={handelSubmit} />
          ) : (
            <MdModeEditOutline size={18} onClick={handleEdit} />
          )}
        </td>
        <td className="OneServiceCelluleIconDelete">
          <MdDeleteForever size={18} onClick={handleDelete} />
        </td>
      </tr>
    </>
  );
};

export default OneService;
