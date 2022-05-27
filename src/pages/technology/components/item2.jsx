import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item2({technology}) {
  let {ip} = useAuth();
  return(
      <>
        <div className="new__left">
        <Link to={`/layout/logform/${technology._id}`}>
                <img src={ip+"images/"+technology.images} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layout/logform/${technology._id}`}>
                  {
                    technology.title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item2;