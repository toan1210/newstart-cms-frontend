import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item4({living}) {
  let {ipapi,iplink} = useAuth();
  return(
      <>
       <div className="new__left">
              <Link to={`/layout/logform/${living.id}`}>
                <img src={iplink+living.Avata[0].url} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layout/logform/${living.id}`}>
                  {
                    living.TieuDe
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item4;