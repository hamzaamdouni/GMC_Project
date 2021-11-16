import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import "./ProfilUser.css";

import ProfilImage from "../../Assets/User/profil.jpg";

import { FaUserCheck, FaMapMarkedAlt, FaUserGraduate } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";

import {
  currentAgent,
  deleteUser,
  editCurrentAgent,
  editCurrentUser,
  getcommentAgent,
  getcommentUser,
  getdemandeAgent,
  getdemandeUser,
  onecategory,
  oneservice,
} from "../../JS/actions/visiteur";

import Navbar from "../../Components/ServicesElements/Navbar/Navbar";
import DemandeHeader from "../../Components/ProfilUser/DemandeHeader/DemandeHeader";
import DemandeBody from "../../Components/ProfilUser/DemandeBody/DemandeBody";
import CommentAgent from "../../Components/ProfilUser/CommentAgent/CommentAgent";
import DemandesUser from "../../Components/ProfilUser/DemandesUser/DemandesUser";
import CommentsUser from "../../Components/ProfilUser/CommentsUser/CommentsUser";

const ProfilUser = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.visiteurReducer.user);
  const agent = useSelector((state) => state.visiteurReducer.agent);
  const service = useSelector((state) => state.visiteurReducer.service);
  const category = useSelector((state) => state.visiteurReducer.category);
  const demandesUser = useSelector(
    (state) => state.visiteurReducer.demandesUser
  );
  const demandesAgent = useSelector(
    (state) => state.visiteurReducer.demandesAgent
  );
  const commentsUser = useSelector(
    (state) => state.visiteurReducer.commentsUser
  );
  const commentsAgent = useSelector(
    (state) => state.visiteurReducer.commentsAgent
  );

  const id = user._id;
  const idService = agent.id_service;
  const idcategory = agent.id_category;

  const [isActive, setIsActive] = useState("DemandeRecu");
  const [isModify, setisModify] = useState(true);
  const [editUser, setEditUser] = useState();
  const [editAgent, setEditAgent] = useState();

  const handleActive = (e) => {
    setIsActive(e.target.value);
  };

  const handleDeleteUser = () => {
    let result = window.confirm("are you sure to delete that?");
    if (result) {
      dispatch(deleteUser(history));
    }
  };

  const handleEditUser = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };

  const handleEditAgent = (e) => {
    setEditAgent({ ...editAgent, [e.target.name]: e.target.value });
  };

  const handleModify = () => {
    setisModify(!isModify);
    setEditUser(user);
    setEditAgent(agent);
  };

  const handleModifyUser = () => {
    dispatch(editCurrentUser(editUser));
    if (user.role === "Agent") {
      dispatch(editCurrentAgent(editAgent));
    }
    setisModify(!isModify);
  };

  useEffect(() => {
    if (user.role === "Agent") {
      dispatch(currentAgent(id));
      dispatch(oneservice(idService));
      dispatch(onecategory(idcategory));
    }
  }, [dispatch, id, idService, idcategory, user.role]);

  useEffect(() => {
    dispatch(getdemandeUser());
    dispatch(getcommentUser());

    if (user.role === "Agent") {
      dispatch(getdemandeAgent());
      dispatch(getcommentAgent());
    }
  }, [dispatch, isActive, user.role]);

  return (
    <div className="ProfilUser">
      {/***************************************** NavBar *****************************************/}
      <Navbar />
      <div className="ProfilUserContainer">
        {/***************************************** Partie Information user *****************************************/}
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
                    onChange={handleEditUser}
                    value={editUser.nom}
                  />{" "}
                  <input
                    className="Informationinput"
                    type="text"
                    required
                    name="prenom"
                    onChange={handleEditUser}
                    value={editUser.prenom}
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
                  onChange={handleEditUser}
                  value={editUser.adress}
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
                  onChange={handleEditUser}
                  value={editUser.email}
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
                  onChange={handleEditUser}
                  value={editUser.phone}
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
                    onChange={handleEditAgent}
                    value={editAgent.calification}
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
                    name="experience"
                    onChange={handleEditAgent}
                    value={editAgent.experience}
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
              <button className="DeleteBtn" onClick={handleDeleteUser}>
                Effacer
              </button>
            </div>
          ) : (
            <div className="ButtonCentent">
              <button className="ModifBtn" onClick={handleModifyUser}>
                Enregistrer
              </button>
              <button className="DeleteBtn" onClick={handleModify}>
                Annuler
              </button>
            </div>
          )}
        </div>

        {/***************************************** Partie Gerer les demandes et commentaires *****************************************/}
        <div className="DiverContainer">
          {/***************************************** Boutons des choix demande ou commentaire *****************************************/}
          <div className="DiverNavContainer">
            {user.role === "Agent" && (
              <>
                {" "}
                <button
                  className="DiverNavBtn"
                  value="DemandeRecu"
                  onClick={handleActive}
                >
                  Demande Reçu {`( ${demandesAgent.length} )`}
                </button>
                <button
                  className="DiverNavBtn"
                  value="CommentRecu"
                  onClick={handleActive}
                >
                  Commentaire Reçu {`( ${commentsAgent.length} )`}
                </button>
              </>
            )}

            <button
              className="DiverNavBtn"
              value="MesDemande"
              onClick={handleActive}
            >
              Mes Demande {`( ${demandesUser.length} )`}
            </button>
            <button
              className="DiverNavBtn"
              value="MesComment"
              onClick={handleActive}
            >
              Mes Commentaire {`( ${commentsUser.length} )`}
            </button>
          </div>

          <div className="DiverContent">
            {isActive === "DemandeRecu" && (
              <>
                <DemandeHeader demandes={demandesAgent} />
                <DemandeBody demandesAgent={demandesAgent} />
              </>
            )}

            {isActive === "CommentRecu" && (
              <>
                <CommentAgent commentsAgent={commentsAgent} />
              </>
            )}
            {isActive === "MesDemande" && (
              <>
                <DemandeHeader demandes={demandesUser} />
                <DemandesUser demandesUser={demandesUser} />
              </>
            )}
            {isActive === "MesComment" && (
              <>
                <CommentsUser commentsUser={commentsUser} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilUser;
