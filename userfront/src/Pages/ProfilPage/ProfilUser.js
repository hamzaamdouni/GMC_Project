import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProfilUser.css";
import Navbar from "../../Components/ServicesElements/Navbar/Navbar";

import ProfilImage from "../../Assets/User/profil.jpg";

import { FaUserCheck, FaMapMarkedAlt, FaUserGraduate } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { AiFillCaretDown, AiFillCaretUp, AiOutlineClose } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";

import {
  currentAgent,
  getdemandeclient,
  onecategory,
  oneservice,
} from "../../JS/actions/visiteur";

const ProfilUser = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isActive, setIsActive] = useState("DemandeRecu");
  const [isModify, setisModify] = useState(true);

  const handleModify = () => {
    setisModify(!isModify);
  };
  const handleActive = (e) => {
    setIsActive(e.target.value);
  };
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const user = useSelector((state) => state.visiteurReducer.user);
  const agent = useSelector((state) => state.visiteurReducer.agent);
  const service = useSelector((state) => state.visiteurReducer.service);
  const category = useSelector((state) => state.visiteurReducer.category);
  const id = user._id;
  const idService = agent.id_service;
  const idcategory = agent.id_category;

  console.log("Profiluser", id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.role === "Agent") {
      dispatch(currentAgent(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (user.role === "Agent") {
      dispatch(oneservice(idService));
    }
  }, [dispatch, idService]);

  useEffect(() => {
    if (user.role === "Agent") {
      dispatch(onecategory(idcategory));
    }
  }, [dispatch, idcategory]);

  useEffect(() => {
    dispatch(getdemandeclient());
  }, [dispatch]);

  return (
    <div className="ProfilUser">
      <Navbar />
      <div className="ProfilUserContainer">
        <div className="InfoContainer">
          <div className="ImageCentent">
            <img src={ProfilImage} alt="" className="ProfilImg" />
          </div>

          {user.role === "Agent" ? (
            <div className="ServiceCentent">
              <div className="InformationService">
                <span>
                  {service.nom} - {category.nom}
                </span>
              </div>
            </div>
          ) : null}

          {user.role === "Agent" ? (
            <div className="ServiceDescription">
              <div className="InformationDescription">
                <span>{agent.description}</span>
              </div>
            </div>
          ) : null}

          <div className="InfoCentent">
            <div className="Information">
              <FaUserCheck className="UserIcon" />
              {isModify ? (
                <span>
                  {user.nom} {user.prenom}
                </span>
              ) : (
                <div className="NomEtPrenom">
                  {" "}
                  <input
                    class="Informationinput"
                    type="text"
                    required
                    name="nom"
                    value={user.nom}
                  />{" "}
                  <input
                    className="Informationinput"
                    type="text"
                    required
                    name="prenom"
                    value={user.prenom}
                  />{" "}
                </div>
              )}
            </div>
            <div className="Information">
              <FaMapMarkedAlt className="UserIcon" />
              {isModify ? (
                <span>{user.adress}</span>
              ) : (
                <input
                  class="input"
                  type="text"
                  required
                  name="adress"
                  value={user.adress}
                />
              )}
            </div>
            <div className="Information">
              <IoIosMail className="UserIcon" />
              {isModify ? (
                <span>{user.email}</span>
              ) : (
                <input
                  class="input"
                  type="email"
                  required
                  name="email"
                  value={user.email}
                />
              )}
            </div>
            <div className="Information">
              <BsFillTelephoneFill className="UserIcon" />
              {isModify ? (
                <span>{user.phone}</span>
              ) : (
                <input
                  class="input"
                  type="number"
                  required
                  name="phone"
                  value={user.phone}
                />
              )}
            </div>
          </div>
          {user.role === "Agent" ? (
            <div className="InfoCentent">
              <div className="Information">
                <FaUserGraduate className="UserIcon" />
                {isModify ? (
                  <span>{agent.calification}</span>
                ) : (
                  <input
                    class="input"
                    type="text"
                    required
                    name="calification"
                    value={agent.calification}
                  />
                )}
              </div>
              <div className="Information">
                <MdWork className="UserIcon" />
                {isModify ? (
                  <span>{agent.experience} ans</span>
                ) : (
                  <input
                    class="input"
                    type="number"
                    required
                    name="calification"
                    value={agent.experience}
                  />
                )}
              </div>
            </div>
          ) : null}

          {isModify ? (
            <div className="ButtonCentent">
              <button className="ModifBtn" onClick={handleModify}>
                Modifier
              </button>
              <button className="DeleteBtn">Effacer</button>
            </div>
          ) : (
            <div className="ButtonCentent">
              <button className="ModifBtn">Modifier</button>
              <button className="DeleteBtn" onClick={handleModify}>
                Annuler
              </button>
            </div>
          )}
        </div>

        <div className="DiverContainer">
          {/* {isActive === "MesDemande" && (
            <div className="DemandeContainer">
              <div className="DemandeContainerHeader">
                <span className="Title"> Liste des Demandes </span>
                {isOpen ? (
                  <AiFillCaretDown onClick={handleOpen} className="Icon" />
                ) : (
                  <AiFillCaretUp onClick={handleOpen} className="Icon" />
                )}
              </div>
              {isOpen ? (
                <div className="DemandeContainerBody">
                  <div className="DemandeContent">
                    <div className="DemandeContentHead">
                      <div>
                        <span className="HeadNom">Hamza Amdouni</span>
                        <span className="HeadAdress"> - Hammam Lif</span>
                      </div>
                      <div>
                        <AiOutlineClose className="HeadRefuser" />
                        <GiCheckMark className="HeadAccepter" />
                      </div>
                    </div>

                    <div className="DemandeContentBody">
                      <span className="BodyDate"> 26/12/1990</span>
                      <span className="BodyDescription">
                        {" "}
                        j'ai besoin d'une preparation demain
                      </span>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          )} */}

          <div className="DiverNavContainer">
            <button
              className="DiverNavBtn"
              value="DemandeRecu"
              onClick={handleActive}
            >
              Demande Reçu
            </button>
            <button
              className="DiverNavBtn"
              value="CommentRecu"
              onClick={handleActive}
            >
              Commentaire Reçu
            </button>
            <button
              className="DiverNavBtn"
              value="MesDemande"
              onClick={handleActive}
            >
              Mes Demande
            </button>
            <button
              className="DiverNavBtn"
              value="Mes Comment"
              onClick={handleActive}
            >
              Mes Commentaire
            </button>
          </div>
          <div className="DiverContent">
            {isActive === "DemandeRecu" && <h1>DemandeRecu</h1>}
            {isActive === "CommentRecu" && <h1>CommentRecu</h1>}
            {isActive === "MesDemande" && <h1>MesDemande</h1>}
            {isActive === "Mes Comment" && <h1>Mes Comment</h1>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilUser;
