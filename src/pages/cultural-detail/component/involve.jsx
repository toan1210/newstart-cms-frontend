import React from "react";
import ReactMarkdown from "react-markdown";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../core/useAuth";

// import { Container } from './styles';

function Invole({
  _id,
  title,
  author,
  status,
  category,
  date,
  images,
  sumary,
  content,
}) {
  let { ip } = useAuth();

  return (
    <>
      <div className="involve-content">
        <div className="involve-content__img">
          <a href={`/cultural/${_id}`}>
            <img src={ip + "images/" + images} alt="" srcSet />
          </a>
        </div>
        <div className="involve-content__text">
          <a href>
            <h3>{title}</h3>
          </a>
          <span dangerouslySetInnerHTML={{ __html: sumary }}></span>
        </div>
      </div>
    </>
  );
}

export default Invole;
