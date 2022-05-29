import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item2({entertain}) {
  let {ip} =useAuth();
  return(
      <>
        <div className="new__left">
        <Link to={`/layout/logform/${entertain._id}`}>
        <img src={ip+"images/"+entertain.images} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layout/logform/${entertain._id}`}>
                  {
                    entertain.title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item2;