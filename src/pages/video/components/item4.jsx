import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item4({video}) {
  let {ipapi,iplink} = useAuth();
  return(
      <>
       <div className="new__left">
               <Link to={`/video/${video.id}`}>
                <img src={iplink+video.Avata[0].url} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/video/${video.id}`}>
                  {
                    video.Title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item4;