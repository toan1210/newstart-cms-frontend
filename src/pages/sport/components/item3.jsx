import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item3({sport}) {
  let {ip} =useAuth();
  return(
      <>
       <div className="new__middo">
            <Link to={`/layoutstory/story/${sport._id}`}>
            <img src={ip+"images/"+sport.images} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layoutstory/story/${sport._id}`}>
                  {
                    sport.title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item3;