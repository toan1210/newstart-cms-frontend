import React from "react";

function Comment() {
  return (
    <>
      <div className="comment">
        <div className="info-user">
            {/* <img className="avatar-user" src="/img/userimg.jpg" alt="avatar user"/> */}
            <i className="avatar-user fa-solid fa-user"></i>
            <h3 className="name-user">
              Name user
            </h3>
        </div>
        <form className="form-comment">
          <textarea className="input-comment" placeholder="Bạn nghĩ gì về tin này"></textarea>
          <button className="btn-send-comment">Gửi bình luận</button>
        </form>
      </div>
    </>
  );
}

export default Comment;
