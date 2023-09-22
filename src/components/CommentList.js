import React from "react";
import Comment from "./Comment";

const CommentList = ({ comment }) => {
  return comment.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {comment.reply.length > 0 && (
        <div className="px-5 border border-l-black ml-5">
          {/* {recursion in component} */}
          {console.log(comment.reply.length)}

          <CommentList comment={comment.reply} />
        </div>
      )}
    </div>
  ));
};

export default CommentList;
