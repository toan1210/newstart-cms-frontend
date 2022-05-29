import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Item({_id,author,longform,story,images,title,category}) {
  let {ip} =useAuth();
  var url ='';
  if(story === 'story')
  {
    url ="/layoutstory/story";
  }
  else if(longform ==='longform')
  {
    url ="/layout/logform";
  }
  return(
      <>
      <div className="card padding">
          <div className="slider-content-img">
            <img className="slider-img-img" src={ip+"images/"+images} alt="" />
            <div className="slider-content-ovelay">
            <Link to={`${url}/${_id}`} className="content-slider">
                <div className="content-ovelay">
                </div>
              </Link>
            </div>
            <div className="content-img-story">
              <span>story</span>
            </div>
            <div className="content-img-title">
              <div className="content-title-img">
                <p>{title}</p>
              </div>
            </div>
            <div className="content-img-camera">
              <div className="img-camera">
                <img className="camera" src="img/11.png" alt="" srcSet />
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default Item;