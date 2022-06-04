import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item({_id,title,author,status,category,date,images,sumary}) {
  let {ip} = useAuth();
  return(
      <>
      <div className="list-news__itme">
      <Link to={`/layoutstory/story/${_id}`}>
                <img src={ip+"images/"+images} alt="" srcSet />
          </Link>
          <div className="news-itme__content">
          <Link to={`/layoutstory/story/${_id}`}>
              <span>
               {title}
              </span>
            </Link>
          </div>
        </div>
      </>
  )
}

export default Item;