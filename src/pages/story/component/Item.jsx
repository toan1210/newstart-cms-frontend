import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item({Avata,id,TieuDe}) {
  let {ipapi,iplink} = useAuth();
    var link =Avata[0].url;
  return(
      <>
      <div className="list-news__itme">
      <Link to={`/layoutstory/story/${id}`}>
                <img src={iplink+link} alt="" srcSet />
          </Link>
          <div className="news-itme__content">
          <Link to={`/layoutstory/story/${id}`}>
              <span>
               {TieuDe}
              </span>
            </Link>
          </div>
        </div>
      </>
  )
}

export default Item;