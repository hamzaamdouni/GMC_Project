import React, { useEffect, useState } from "react";
import "./CommentAgent.css";
import { MdVerified, MdDeleteForever, MdModeEditOutline } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import { GoUnverified } from "react-icons/go";

import {
  deleteCommentAgent,
  editcommentagent,
  editcommentUser,
  getoneagent,
} from "../../../JS/actions/visiteur";
import { useDispatch, useSelector } from "react-redux";

const CommentAgentBody = ({ comment, isActive }) => {
  const oneagent = useSelector((state) => state.visiteurReducer.oneagent);

  const [isModify, setisModify] = useState(false);
  const [editComment, setEditComment] = useState({
    message: comment.message,
    etat: "NotVerified",
  });

  const dispatch = useDispatch();
  const isVerfied = { etat: "Verified" };
  const idcomment = comment._id;

  const handleVerified = () => {
    dispatch(editcommentagent(idcomment, isVerfied));
  };

  const handleModify = () => {
    setisModify(!isModify);
  };

  const handleInput = (e) => {
    setEditComment({ ...editComment, message: e.target.value });
  };
  const handleDelete = () => {
    dispatch(deleteCommentAgent(idcomment));
  };
  const handleEdit = () => {
    dispatch(editcommentUser(comment._id, editComment));
    setisModify(!isModify);
  };
  useEffect(() => {
    isActive === "MesComment" && dispatch(getoneagent(comment.id_agent._id));
  }, [dispatch, comment.id_agent._id, isActive]);

  return (
    <div className="CommentAgentBodyContent">
      <div className="CommentAgentBodyContentHeader">
        {isActive === "CommentRecu" ? (
          <span>
            {comment.id_user.prenom} {comment.id_user.nom}
          </span>
        ) : (
          <span>
            {oneagent && oneagent.id_agent.prenom}{" "}
            {oneagent && oneagent.id_agent.nom}
          </span>
        )}
        {isActive === "MesComment" && comment.etat === "NotVerified" && (
          <GoUnverified className="CommentAgentIconNotVerified" size={18} />
        )}
        {comment.etat === "Verified" && (
          <MdVerified className="CommentAgentIconVerified" size={20} />
        )}
      </div>
      <div className="CommentAgentBodyContentBody">
        <div className="CommentAgentBodyContentBodyMessage">
          {isActive === "MesComment" ? (
            isModify === true ? (
              <input
                type="text"
                name="message"
                value={editComment.message}
                onChange={handleInput}
              />
            ) : (
              <span>{comment.message}</span>
            )
          ) : (
            <span>{comment.message}</span>
          )}
        </div>

        <div className="CommentAgentBodyContentBodyIcon">
          {isActive === "MesComment" ? (
            isModify ? (
              <GiCheckMark
                size={20}
                className="Verifier"
                onClick={handleEdit}
              />
            ) : (
              <MdModeEditOutline
                size={20}
                className="Verifier"
                onClick={handleModify}
              />
            )
          ) : (
            comment.etat === "NotVerified" && (
              <GiCheckMark
                size={20}
                className="Verifier"
                onClick={handleVerified}
              />
            )
          )}

          <MdDeleteForever
            size={20}
            className="delete"
            onClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default CommentAgentBody;
