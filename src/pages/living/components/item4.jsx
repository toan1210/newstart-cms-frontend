import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item4({living}) {
  let {ip} = useAuth();
  return(
      <>
       <div className="new__left">
              <Link to={`/layout/logform/${living._id}`}>
                <img src={ip+"images/"+living.images} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layout/logform/${living._id}`}>
                  {
                    living.title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item4;