import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item5({fashion}) {
  let {ip} =useAuth();
  return(
      <>
      <div className="new__middo">
      <Link to={`/layoutstory/story/${fashion._id}`}>
      <img src={ip+"images/"+fashion.images} alt="" srcSet />
      </Link>
              <p>
              <Link to={`/layoutstory/story/${fashion._id}`}>
                  {
                    fashion.title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item5;