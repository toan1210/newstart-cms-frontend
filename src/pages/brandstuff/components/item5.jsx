import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item5({brandstuff}) {
  let {ip} =useAuth();
  return(
      <>
      <div className="new__middo">
             <Link to={`/layoutstory/story/${brandstuff._id}`}>
                <img src={ip+"images/"+brandstuff.images} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layoutstory/story/${brandstuff._id}`}>
                  {
                    brandstuff.title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item5;