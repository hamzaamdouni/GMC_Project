import React from "react";
import { useSelector } from "react-redux";
import "./SearchDropdown.css";

const SearchDropdown = ({ setService, service, setCategory, category }) => {
  const isload = useSelector((state) => state.visiteurReducer.isload);
  const services = useSelector((state) => state.visiteurReducer.services);
  const categorys = useSelector((state) => state.visiteurReducer.categorys);

  const handleAllService = () => {
    setService("-- Services--");
  };
  const handleService = (e) => {
    setService(e.target.value);
    setCategory("-- Categorys--");
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  console.log(setService);
  return (
    <div className="SearchDropdownContainer">
      <button className="SearchDropdownBtn" onClick={handleAllService}>
        {" "}
        Tout les Services{" "}
      </button>
      <div className="inputfieldSearch">
        <div className="custom_selectSearch">
          <select name="service" onInput={handleService}>
            {service === "-- Services--" && (
              <option value="-- Toutes les service--">{service}</option>
            )}
            {isload
              ? null
              : services.map((el) => <option value={el.nom}>{el.nom}</option>)}
          </select>
        </div>
      </div>

      <div className="inputfieldSearch">
        <div className="custom_selectSearch">
          {service === "-- Services--" ? (
            <select name="category" disabled>
              <option value="">{category}</option>
            </select>
          ) : (
            <select name="category" onInput={handleCategory}>
              <option value="">{category}</option>
              {isload
                ? null
                : categorys.map((el) => (
                    <option value={el.nom}>{el.nom}</option>
                  ))}
            </select>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchDropdown;
