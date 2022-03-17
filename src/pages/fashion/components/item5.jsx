import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item5({fashion}) {
  let {ipapi,iplink} =useAuth();
  return(
      <>
      <div className="new__middo">
      <Link to={`/layoutstory/story/${fashion.id}`}>
      <img src={iplink+fashion.Avata[0].url} alt="" srcSet />
      </Link>
              <p>
              <Link to={`/layoutstory/story/${fashion.id}`}>
                  {
                    fashion.TieuDe
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item5;