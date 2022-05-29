import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item4({video}) {
  let {ip} = useAuth();
  return(
      <>
       <div className="new__left">
               <Link to={`/video/${video._id}`}>
               <img src={ip+"images/"+video.images} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/video/${video._id}`}>
                  {
                    video.title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item4;