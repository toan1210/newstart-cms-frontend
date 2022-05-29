import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item1({sport,arrayadvertisements}) {
  let {ip} =useAuth();
  return(
      <>
      <div className="page__home-content">
          <div className="left">
            <div className="left__header">
            <Link to={`/sport/${sport._id}`}>
            <img src={ip+"images/"+sport.images} alt="" srcSet />
              </Link>
              <div className="left-title">
              <Link to={`/sport/${sport._id}`}>{ sport.title}</Link>
              <div dangerouslySetInnerHTML={{__html:sport.sumary}}></div>
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