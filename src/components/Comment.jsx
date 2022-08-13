import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Comment({idPost}) {
  const [commentData, setCommentData] = useState();
  // console.log("xinchao: ",idPost);
  const [message, setMessage] = useState("");
  const Comment = ({ comment }) => {
    return (
      <div style={{ padding: 10 }}>
        <span style={{ fontWeight: "bold" }}>Ẩn danh</span> <span>  {comment.createdAt}</span>
        <p>{comment.content}</p>
      </div>
    )
  }

  const getComment = () => {
    axios.get(`http://localhost:4001/traditional/comments/${idPost}`)
      .then(res => {
        setCommentData(res.data);
      })
  }
  const postComment = (msg) => {
    let today=new Date();
    axios.post("http://localhost:4001/traditional/comments", {
      idPost: idPost,
      content: msg,
      createdAt:today.getHours() + ":" + today.getMinutes()+" "+ today.getDate()+ '/'+(today.getMonth()+1)+'/'+today.getFullYear()
    })
  }
  const enterSubmit = (e) => {
    e.preventDefault();
    postComment(message)
    setMessage("")
  }
  const clickSubmit = () => {
    postComment(message)
    setMessage("")
  }
  useEffect(() => {
    getComment()
  }, [getComment])
  return (
    <>
      <div className="comment">
        {
          commentData && (
            <div className="container_comment">
              <div style={{ fontSize: 20, fontWeight: "bold", color: "blueviolet", marginBottom: 20 }}>Bình luận</div>
              {
                commentData.map(cmt => (
                  <Comment comment={cmt} />
                ))
              }
            </div>
          )
        }
        <div className="info-user">
          {/* <img className="avatar-user" src="/img/userimg.jpg" alt="avatar user"/> */}
          <i className="avatar-user fa-solid fa-user"></i>
          <h3 className="name-user">
            Name user
          </h3>
        </div>
        <form className="form-comment">
          <input
            // id="message"
            type="text"
            placeholder="Enter Message"
            // required
            class="input-comment"
            name='message'
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            value={message}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                enterSubmit(event);
              }
            }}
          />
          <div className="btn-send-comment" name='message'
            onClick={clickSubmit}
          >Gửi bình luận</div>
        </form>
      </div>
    </>
  );
}

export default Comment;
