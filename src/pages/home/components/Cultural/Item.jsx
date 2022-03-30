import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Item({Avata,TieuDe,id,Img1}) {
  let {ipapi,iplink} =useAuth();
  var url ='';
  if(typeof(Img1) === 'object')
  {
    url ="/layoutstory/story";
  }
  else if(typeof(Img1)==='undefined')
  {
    url ="/technology"
  }
  return(
      <>
      <div className="card padding">
          <div className="slider-content-img">
            <img className="slider-img-img" src={iplink + Avata[0].url} alt="" />
            <div className="slider-content-ovelay">
            <Link to={`${url}/${id}`} className="content-slider">
                <div className="content-ovelay">
                </div>
              </Link>
            </div>
            <div className="content-img-story">
              <span>story</span>
            </div>
            <div className="content-img-title">
              <div className="content-title-img">
                <p>{TieuDe}</p>
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