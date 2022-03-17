import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item2({technology}) {
  let {ipapi,iplink} = useAuth();
  return(
      <>
        <div className="new__left">
        <Link to={`/layout/logform/${technology.id}`}>
                <img src={iplink+technology.Avata[0].url} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layout/logform/${technology.id}`}>
                  {
                    technology.TieuDe
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item2;