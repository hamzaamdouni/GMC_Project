import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MdDeleteForever, MdModeEditOutline, MdCheck } from "react-icons/md";
import {
  deleteCategorys,
  editCategory,
} from "../../../../../JS/actions/administrateur";

const GererOneCategory = ({ category }) => {
  const [isEdit, setisEdit] = useState(false);
  const [editcategory, setEditcategory] = useState({
    nom: category.nom,
  });

  const handleEditecategory = (e) => {
    setEditcategory({ ...editcategory, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setisEdit(!isEdit);
  };
  const dispatch = useDispatch();
  const handelSubmit = () => {
    dispatch(editCategory(category._id, editcategory));
    setisEdit(!isEdit);
  };

  const handleDelete = () => {
    dispatch(deleteCategorys(category._id));
  };
  return (
    <div className="OnecategoryContainer">
      {isEdit ? (
        <input
          className="Nom"
          type="text"
          name="nom"
          onInput={handleEditecategory}
          value={editcategory.nom}
        />
      ) : (
        <span className="OnecategoryNom">{category.nom}</span>
      )}
      <span className="OnecategoryService">{category.id_service.nom}</span>
      <div className="OnecategoryIcon">
        {isEdit ? (
          <MdCheck
            size={18}
            onClick={handelSubmit}
            className="OnecategoryIconBleu"
          />
        ) : (
          <MdModeEditOutline
            size={18}
            onClick={handleEdit}
            className="OnecategoryIconBleu"
          />
        )}
        <MdDeleteForever
          size={18}
          onClick={handleDelete}
          className="OnecategoryIconRed"
        />
      </div>
    </div>
  );
};

export default GererOneCategory;
