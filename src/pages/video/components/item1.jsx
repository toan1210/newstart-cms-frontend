import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item1({video,arrayadvertisements}) {
  let {ip} = useAuth();
  return(
      <>
      <div className="page__home-content">
          <div className="left">
            <div className="left__header">
            <Link to={`/video/${video._id}`}>
                  <img src={ip+"images/"+video.images} />
              </Link>
              <div className="left-title">
                  <Link to={`/video/${video._id}`}>
                   {video.title}
                </Link>
                <div dangerouslySetInnerHTML={{__html:video.sumary}}></div>
              </div>
              <div className="left-quangcao">
              <a href={arrayadvertisements[0].TourismAdvertisementRightContent}>
                <img className="left-quangcao-img" src={ip+"images/"+arrayadvertisements[0].tourism} alt="" />
                </a>
              </div>
            </div>
            <div className="left-content">
            </div>
          </div>
          <div className="right">
          </div>
        </div>
      </>
  );
}

export default Item1;