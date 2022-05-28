import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item5({cuisine}) {
  let {ip} =useAuth();
  return(
      <>
      <div className="new__middo">
             <Link to={`/layoutstory/story/${cuisine.id}`}>
                <img src={ip+"images/"+cuisine.images} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layoutstory/story/${cuisine._id}`}>
                  {
                    cuisine.title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item5;