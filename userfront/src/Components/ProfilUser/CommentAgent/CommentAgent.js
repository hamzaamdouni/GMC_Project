import React from "react";
import "./CommentAgent.css";
import CommentAgentBody from "./CommentAgentBody";

const CommentAgent = ({ commentsAgent }) => {
  const Verified = commentsAgent.filter(
    (comment) => comment.etat === "Verified"
  );

  const NotVerified = commentsAgent.filter(
    (comment) => comment.etat === "NotVerified"
  );
  return (
    <div className="CommentAgentContainer">
      <div className="CommentAgentHeader">
        <div className="CommentAgentHeaderContent">
          <span className="CommentAgentHeaderContentTitle">
            Commentaire verifier
          </span>
          <span className="CommentAgentHeaderContentNumber">
            {Verified.length}
          </span>
        </div>
        <div className="CommentAgentHeaderContent">
          <span className="CommentAgentHeaderContentTitle">
            Commentaire non verifier
          </span>
          <span className="CommentAgentHeaderContentNumber">
            {NotVerified.length}
          </span>
        </div>
      </div>

      <div className="CommentAgentBody">
        {commentsAgent.map((comment) => (
          <CommentAgentBody comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentAgent;
