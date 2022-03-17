import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item2({entertain}) {
  let {ipapi,iplink} =useAuth();
  return(
      <>
        <div className="new__left">
        <Link to={`/layout/logform/${entertain.id}`}>
        <img src={iplink+entertain.Avata[0].url} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layout/logform/${entertain.id}`}>
                  {
                    entertain.TieuDe
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item2;