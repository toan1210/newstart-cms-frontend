import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item4({brandstuff}) {
  let {ipapi,iplink} =useAuth();
  return(
      <>
       <div className="new__left">
       <Link to={`/layout/logform/${brandstuff.id}`}>
                <img src={iplink+brandstuff.Avata[0].url} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layout/logform/${brandstuff.id}`}>
                  {
                    brandstuff.TieuDe
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item4;