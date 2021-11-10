import React, { useEffect, useState } from "react";
import "./ProfilModal.css";
import ProfilImage from "../../../Assets/User/profil.jpg";

import { AiFillCloseCircle, AiFillLike } from "react-icons/ai";
import { FaMapMarkedAlt, FaUserGraduate } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import {
  BsFillTelephoneFill,
  BsFillEmojiAngryFill,
  BsFillEmojiLaughingFill,
} from "react-icons/bs";
import { MdWork } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import {
  addcomment,
  getoneagent,
  getverifiedcomment,
} from "../../../JS/actions/visiteur";
import Loading from "../../Loading/Loading";

const ProfilModal = ({ setModalIsOpen, idagent }) => {
  const handleComment = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };

  const handleIsOpen = () => {
    setModalIsOpen(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getoneagent(idagent));
  }, [dispatch, idagent]);

  useEffect(() => {
    dispatch(getverifiedcomment(idagent));
  }, [dispatch, idagent]);

  const isload = useSelector((state) => state.visiteurReducer.isload);
  const oneagent = useSelector((state) => state.visiteurReducer.oneagent);
  const verifiedComment = useSelector(
    (state) => state.visiteurReducer.verifiedComment
  );
  const user = useSelector((state) => state.visiteurReducer.user);

  console.log(verifiedComment);

  const [newComment, setNewComment] = useState({
    id_agent: "",
    message: "",
  });
  const handleSubmit = () => {
    dispatch(addcomment(newComment));
    setNewComment({
      id_agent: oneagent._id,
      message: "",
    });
  };

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
                  {oneagent && oneagent.id_agent.nom}{" "}
                  {oneagent && oneagent.id_agent.prenom}
                </span>
              </div>
              <div className="ModalInfService">
                <span>
                  {oneagent && oneagent.id_service.nom} -{" "}
                  {oneagent && oneagent.id_category.nom}
                </span>
              </div>
            </div>
            <div className="ModalInfoWrapper">
              <div className="ModalInfoInformation">
                <FaMapMarkedAlt className="ModalInfoIcon" />
                <span>{oneagent && oneagent.id_agent.adress}</span>
              </div>

              <div className="ModalInfoInformation">
                <BsFillTelephoneFill className="ModalInfoIcon" />
                <span>{oneagent && oneagent.id_agent.phone}</span>
              </div>

              <div className="ModalInfoInformation">
                <IoIosMail className="ModalInfoIcon" />
                <span>{oneagent && oneagent.id_agent.email}</span>
              </div>

              <div className="ModalInfoInformation">
                <FaUserGraduate className="ModalInfoIcon" />
                <span>{oneagent && oneagent.calification}</span>
              </div>

              <div className="ModalInfoInformation">
                <MdWork className="ModalInfoIcon" />
                <span>
                  {oneagent && oneagent.experience} {"  ans"}
                </span>
              </div>
            </div>
          </div>

          <div className="ModalCommentContainer">
            <div className="ModalDescriptionContainer">
              <p>{oneagent && oneagent.description}</p>
              <div className="ModalNoteContainer">
                <BsFillEmojiLaughingFill className="LaughingIcon" size={18} />
                <span>
                  {oneagent && oneagent.satisfait} {"Satisfaits"}
                </span>
                <BsFillEmojiAngryFill size={18} className="AngryIcon" />
                <span>
                  {oneagent && oneagent.insatisfait} {"Insatisfaits"}
                </span>
              </div>
            </div>
            <div className="ModalUserCommentContainer">
              {/* <div className="ModalUserCommentWrapper">
                <img
                  src={ProfilImage}
                  alt="Commenter"
                  className="CommainterImage"
                />
                <div className="CommainterContent">
                  <span className="CommanterName"> Hamza Amdouni</span>
                  <span className="CommanterParagraphe">Mon commentaire</span>
                </div>
              </div> */}
              {isload ? (
                <Loading />
              ) : (
                verifiedComment.map((onecomment) => (
                  <div className="ModalUserCommentWrapper">
                    <img
                      src={ProfilImage}
                      alt="Commenter"
                      className="CommainterImage"
                    />
                    <div className="CommainterContent">
                      <span className="CommanterName">
                        {onecomment.id_user.nom} {onecomment.id_user.prenom}
                      </span>
                      <span className="CommanterParagraphe">
                        {onecomment.message}
                      </span>
                    </div>
                  </div>
                ))
              )}

              <div className="ModalAddComment">
                <textarea
                  required
                  name="message"
                  onInput={handleComment}
                  value={newComment.message}
                />
                <label>Enter votre message</label>
                <button onClick={handleSubmit}>Add</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilModal;
