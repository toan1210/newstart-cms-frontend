import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item2({cuisine}) {
  let {ipapi,iplink} =useAuth();
  return(
      <>
        <div className="new__left">
        <Link to={`/layout/logform/${cuisine.id}`}>
        <img src={iplink+cuisine.Avata[0].url} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layout/logform/${cuisine.id}`}>
                  {
                    cuisine.TieuDe
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item2;