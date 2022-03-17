import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item4({economy}) {
  let {ipapi,iplink} =useAuth();
  return(
      <>
       <div className="new__left">
       <Link to={`/layout/logform/${economy.id}`}>
                <img src={iplink+economy.Avata[0].url} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layout/logform/${economy.id}`}>
                  {
                    economy.TieuDe
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item4;