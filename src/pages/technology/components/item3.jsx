import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item3({technology}) {
  let {ipapi,iplink,ip} = useAuth();
  return(
      <>
       <div className="new__middo">
              <Link to={`/layoutstory/story/${technology._id}`}>
                <img src={ip+"images/"+technology.images} alt="" srcSet />
                </Link>
              <p>
                <Link to={`/layoutstory/story/${technology._id}`}>
                {
                    technology.title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item3;