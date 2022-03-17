import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item5({news}) {
  let {ipapi,iplink} = useAuth();
  return(
      <>
      <div className="new__middo">
      <Link to={`/layoutstory/story/${news.id}`}>
                <img src={iplink+news.Avata[0].url} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layoutstory/story/${news.id}`}>
                  {
                    news.TieuDe
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item5;