import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../core/useAuth";

// import { Container } from './styles';

function Item2({ economy }) {
  let { ip } = useAuth();

  return (
    <>
      <div className="new__left">
        <Link to={`/layout/logform/${economy._id}`}>
          <img src={ip + "images/" + economy.images} alt="" srcSet />
        </Link>
        <p>
          <Link to={`/layout/logform/${economy._id}`}>
            {economy.title}
          </Link>
        </p>
      </div>
    </>
  );
}

export default Item2;
