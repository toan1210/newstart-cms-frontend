import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item5({brandstuff}) {
  let {ipapi,iplink} =useAuth();
  return(
      <>
      <div className="new__middo">
             <Link to={`/layoutstory/story/${brandstuff.id}`}>
                <img src={iplink+brandstuff.Avata[0].url} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layoutstory/story/${brandstuff.id}`}>
                  {
                    brandstuff.Title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item5;