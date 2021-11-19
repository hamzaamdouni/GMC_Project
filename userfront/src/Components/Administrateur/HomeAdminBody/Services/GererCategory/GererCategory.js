import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./GererCategory.css";
import ServiceAdd from "../../../../../Assets/Administrateur/serviceadd.svg";
import { addNewCategory } from "../../../../../JS/actions/administrateur";
import GererOneCategory from "./GererOneCategory";

const GererCategory = () => {
  const services = useSelector((state) => state.AdministrateurReducer.services);
  const categorys = useSelector(
    (state) => state.AdministrateurReducer.categorys
  );

  const [addCategory, setAddCategory] = useState({
    nom: "",
    Oneservice: "",
  });
  const handleCategory = (e) => {
    setAddCategory({ ...addCategory, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const handleRegister = (e) => {
    dispatch(addNewCategory(addCategory));
    setAddCategory({
      nom: "",
      Oneservice: "",
    });

    e.preventDefault();
  };

  return (
    <div className="addCategorys">
      {/* ajouter category */}
      <div className="addCategorysContainer">
        <div className="addCategorysImageContainer">
          <img src={ServiceAdd} alt="ServiceAdd" />
        </div>
        <div className="addCategorysFormContainer">
          <form
            className="addCategoryswrapper"
            encType="multipart/form-data"
            onSubmit={handleRegister}
          >
            <div className="addCategorysFormContent">
              <div className="label">
                <label> Nom category </label>
              </div>
              <input
                className="Nom"
                type="text"
                placeholder="Enter Un nom de category"
                name="nom"
                onInput={handleCategory}
                value={addCategory.nom}
              />
            </div>

            <div className="addCategorysFormContent">
              <div className="label">
                <label> Service </label>
              </div>
              <select name="Oneservice" onChange={handleCategory}>
                {services.map((el) => (
                  <option value={el.nom}>{el.nom}</option>
                ))}
              </select>
            </div>
            <div className="addCategorysFormContent">
              <div className="label"></div>
              <input className="Submit" type="submit" />
            </div>
          </form>
        </div>
      </div>
      {/* Affichage des service */}
      <div className="afficheCategorysContainer">
        {categorys.map((category) => (
          <GererOneCategory category={category} />
        ))}
      </div>
    </div>
  );
};

export default GererCategory;
