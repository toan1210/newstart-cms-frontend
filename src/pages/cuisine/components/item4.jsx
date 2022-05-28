import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item4({cuisine}) {
  let {ip} =useAuth();
  return(
      <>
       <div className="new__left">
       <Link to={`/layout/logform/${cuisine._id}`}>
                <img src={ip+"images/"+cuisine.images} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layout/logform/${cuisine._id}`}>
                  {
                    cuisine.title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item4;