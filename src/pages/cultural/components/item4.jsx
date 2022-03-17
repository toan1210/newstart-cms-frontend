import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item4({cultural}) {
  let {ipapi,iplink} =useAuth();
  return(
      <>
       <div className="new__left">
       <Link to={`/layout/logform/${cultural.id}`}>
                <img src={iplink+cultural.Avata[0].url} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layout/logform/${cultural.id}`}>
                  {
                    cultural.TieuDe
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item4;