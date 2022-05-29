import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item3({economy}) {
  let { ip } = useAuth();
  return (
    <>
      <div className="new__middo">
        <Link to={`/layoutstory/story/${economy._id}`}>
          <img src={ip + "images/" + economy.images} alt="" srcSet />
        </Link>
        <p>
          <Link to={`/layoutstory/story/${economy._id}`}>
            {economy.title}
          </Link>
        </p>
      </div>
    </>
  );
}

export default Item3;