import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item2({tourism}) {
  console.log(tourism);
  let {ip} = useAuth();
  return(
      <>
        <div className="new__left">
              <Link to={`/layout/logform/${tourism._id}`}>
                <img src={ip+"images/"+tourism.images} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layout/logform/${tourism._id}`}>
                  {
                    tourism.title
                  }
                </Link>
              </p>
            </div>

      </>
  );
}

export default Item2;