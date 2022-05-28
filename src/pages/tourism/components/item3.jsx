import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item3({tourism}) {
  let {ip} = useAuth();
  return(
      <>
       <div className="new__middo">
              <Link to={`/layoutstory/story/${tourism._id}`}>
                <img src={ip+"images/"+tourism.images} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layoutstory/story/${tourism._id}`}>
                  {
                    tourism.title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item3;