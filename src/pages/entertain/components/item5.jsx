import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item5({entertain}) {
  let {ip} =useAuth();
  return(
      <>
      <div className="new__middo">
             <Link to={`/layoutstory/story/${entertain._id}`}>
                <img src={ip+"images/"+entertain.images} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layoutstory/story/${entertain._id}`}>
                  {
                    entertain.title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item5;