import React, { useState } from "react";
import "./GererService.css";
import ServiceAdd from "../../../../../Assets/Administrateur/serviceadd.svg";
import { useDispatch, useSelector } from "react-redux";
import { addNewService } from "../../../../../JS/actions/administrateur";
import OneService from "./OneService";
const GererService = () => {
  const services = useSelector((state) => state.AdministrateurReducer.services);

  const [addService, setAddService] = useState({
    nom: "",
    description: "",
    imageName: undefined,
  });

  const handleService = (e) => {
    setAddService({ ...addService, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setAddService({ ...addService, imageName: e.target.files[0] });
  };

  const dispatch = useDispatch();
  const handleRegister = (e) => {
    const formData = new FormData();
    formData.append("nom", addService.nom);
    formData.append("description", addService.description);
    formData.append("imageName", addService.imageName);
    dispatch(addNewService(formData));
    setAddService({
      nom: "",
      description: "",
      imageName: "",
    });

    e.preventDefault();
  };

  return (
    <div className="addServices">
      {/* add Services */}
      <div className="addServicesContainer">
        <div className="addServicesImageContainer">
          <img src={ServiceAdd} alt="ServiceAdd" />
        </div>
        <div className="addServicesFormContainer">
          <form
            className="addServiceswrapper"
            encType="multipart/form-data"
            onSubmit={handleRegister}
          >
            <div className="addServicesFormContent">
              <div className="label">
                <label> Nom service </label>
              </div>
              <input
                className="Nom"
                type="text"
                placeholder="Enter Un nom de service"
                name="nom"
                onInput={handleService}
                value={addService.nom}
              />
            </div>

            <div className="addServicesFormContent">
              <div className="label">
                <label> Description </label>
              </div>
              <textarea
                className="description"
                type="text"
                placeholder="Decriver le service"
                name="description"
                onInput={handleService}
                value={addService.description}
              />
            </div>

            <div className="addServicesFormContent">
              <div className="label">
                <label> Image </label>
              </div>
              <input
                className="image"
                type="file"
                filename="imageName"
                onChange={handleFile}
              />
            </div>

            <div className="addServicesFormContent">
              <div className="label"></div>
              <input className="Submit" type="submit" />
            </div>
          </form>
        </div>
      </div>
      {/* Get All services */}
      <div className="ServicesContainer">
        <div className="tbl-header">
          <table cellPadding={0} cellSpacing={0} border={0}>
            <thead>
              <tr>
                <th className="OneServiceCelluleImage">Image</th>
                <th className="OneServiceCelluleNom">Service</th>
                <th>Description</th>
                <th className="OneServiceCelluleIcon"></th>
                <th className="OneServiceCelluleIcon"></th>
              </tr>
            </thead>
          </table>
          <div className="tbl-content">
            <table cellPadding={0} cellSpacing={0} border={0}>
              <tbody>
                {services.map((Service) => (
                  <OneService Service={Service} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GererService;
