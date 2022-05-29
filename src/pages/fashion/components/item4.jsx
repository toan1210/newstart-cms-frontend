import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item4({fashion}) {
  let {ip} =useAuth();
  return(
      <>
       <div className="new__left">
       <Link to={`/layout/logform/${fashion.id}`}>
         <img src={ip+"images/"+fashion.images} alt="" srcSet />
        </Link>
              <p>
              <Link to={`/layout/logform/${fashion._id}`}>
                  {
                    fashion.title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item4;