import React from "react";
import "./CommentAgent.css";
import { MdVerified, MdDeleteForever } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import {
  deleteCommentAgent,
  editcommentagent,
} from "../../../JS/actions/visiteur";
import { useDispatch } from "react-redux";

const CommentAgentBody = ({ comment }) => {
  const dispatch = useDispatch();
  const isVerfied = { etat: "Verified" };
  const idcomment = comment._id;

  const handleVerified = () => {
    dispatch(editcommentagent(idcomment, isVerfied));
  };

  const handleDelete = () => {
    dispatch(deleteCommentAgent(idcomment));
  };

  return (
    <div className="CommentAgentBodyContent">
      <div className="CommentAgentBodyContentHeader">
        <span>
          {comment.id_user.prenom} {comment.id_user.nom}
        </span>
        {comment.etat === "Verified" && (
          <MdVerified className="CommentAgentIconVerified" />
        )}
      </div>
      <div className="CommentAgentBodyContentBody">
        <div className="CommentAgentBodyContentBodyMessage">
          <span>{comment.message}</span>
        </div>

        <div className="CommentAgentBodyContentBodyIcon">
          {comment.etat === "NotVerified" && (
            <GiCheckMark
              size={20}
              className="Verifier"
              onClick={handleVerified}
            />
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
