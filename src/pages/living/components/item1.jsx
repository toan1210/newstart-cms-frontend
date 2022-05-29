import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';
// import { Container } from './styles';
function Item1({living,arrayadvertisements}) {
  let {ip} = useAuth();
  return(
      <>
      <div className="page__home-content">
          <div className="left">
            <div className="left__header">
              <Link to={`/living/${living._id}`}>
                <img src={ip+"images/"+living.images} alt="" srcSet />
              </Link>
              <div className="left-title">
                <Link to={`/living/${living._id}`}>{living.title}</Link>
                <div dangerouslySetInnerHTML={{__html:living.sumary}}></div>
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