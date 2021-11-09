import React, { useEffect } from "react";
import "./ProfilModal.css";
import ProfilImage from "../../../Assets/User/profil.jpg";

import { AiFillCloseCircle, AiFillLike } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { getoneagent } from "../../../JS/actions/visiteur";

const ProfilModal = ({ setModalIsOpen, idagent }) => {
  const handleIsOpen = () => {
    setModalIsOpen(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getoneagent(idagent));
  }, [dispatch, idagent]);

  const isload = useSelector((state) => state.visiteurReducer.isload);
  const oneagent = useSelector((state) => state.visiteurReducer.oneagent);
  console.log(oneagent);

  return (
    <div className="ProfilModalContainer">
      <AiFillCloseCircle
        onClick={handleIsOpen}
        className="ModalCloseBtn"
        size={32}
      />
      {isload ? (
        <h1>LOAD</h1>
      ) : (
        <div className="ProfilModalContent">
          <div className="ModalInfoContainer">
            <div className="ModalInfContent">
              <div className="ModalImageCentent">
                <img src={ProfilImage} alt="Agent" className="ModalProfilImg" />
                <AiFillLike className="ModalProfilLike" size={25} />
              </div>

              <div className="ModalInfNom">
                <span>
                  {(oneagent && oneagent.id_agent.nom) || "inconnu"}{" "}
                  {oneagent && oneagent.id_agent.prenom}
                </span>
              </div>
              <div className="ModalInfService">
                <span>
                  {oneagent.id_service.nom} - {oneagent.id_category.nom}
                </span>
              </div>
            </div>
          </div>

          <div className="ModalCommentContainer"></div>
        </div>
      )}
    </div>
  );
};

export default ProfilModal;
