import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item3({living}) {
  let {ip} = useAuth();
  return(
      <>
       <div className="new__middo">
              <Link to={`/layoutstory/story/${living._id}`}>
                <img src={ip+"images/"+living.images} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layoutstory/story/${living._id}`}>
                {
                    living.title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item3;