import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item2({fashion}) {
  let {ipapi,iplink} =useAuth();
  return(
      <>
        <div className="new__left">
              <Link to={`/layout/logform/${fashion.id}`}>
                <img src={iplink+fashion.Avata[0].url} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layout/logform/${fashion.id}`}>
                  {
                    fashion.Title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item2;