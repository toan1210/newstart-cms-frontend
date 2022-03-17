import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item3({technology}) {
  let {ipapi,iplink} = useAuth();
  return(
      <>
       <div className="new__middo">
              <Link to={`/layoutstory/story/${technology.id}`}>
                <img src={iplink+technology.Avata[0].url} alt="" srcSet />
                </Link>
              <p>
                <Link to={`/layoutstory/story/${technology.id}`}>
                {
                    technology.TieuDe
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item3;