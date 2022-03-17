import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item3({tourism}) {
  let {ipapi,iplink} = useAuth();
  return(
      <>
       <div className="new__middo">
              <Link to={`/layoutstory/story/${tourism.id}`}>
                <img src={iplink+tourism.Avata[0].url} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layoutstory/story/${tourism.id}`}>
                  {
                    tourism.TieuDe
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item3;