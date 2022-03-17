import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item3({cultural}) {
  let {ipapi,iplink} =useAuth();
  return(
      <>
       <div className="new__middo">
            <Link to={`/layoutstory/story/${cultural.id}`}>
            <img src={iplink+cultural.Avata[0].url} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layoutstory/story/${cultural.id}`}>
                  {
                    cultural.TieuDe
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item3;