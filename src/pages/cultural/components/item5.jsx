import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../core/useAuth";

// import { Container } from './styles';

function Item5({ cultural }) {
  let { ip } = useAuth();
  return (
    <>
      <div className="new__middo">
        <Link to={`/layoutstory/story/${cultural._id}`}>
          <img src={ip + "images/" + cultural.images} alt="" srcSet />
        </Link>
        <p>
          <Link to={`/layoutstory/story/${cultural._id}`}>
            {cultural.title}
          </Link>
        </p>
      </div>
    </>
  );
}

export default Item5;
