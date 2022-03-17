import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item5({sport}) {
  let {ipapi,iplink} =useAuth();
  return(
      <>
      <div className="new__middo">
             <Link to={`/layoutstory/story/${sport.id}`}>
                <img src={iplink+sport.Avata[0].url} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layoutstory/story/${sport.id}`}>
                  {
                    sport.TieuDe
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item5;