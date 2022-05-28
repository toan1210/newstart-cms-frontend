import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item1({cuisine,arrayadvertisements}) {
  let {ip} =useAuth();
  return(
      <>
      <div className="page__home-content">
          <div className="left">
            <div className="left__header">
            <Link to={`/cuisine/${cuisine._id}`}>
            <img src={ip+"images/"+cuisine.images} alt="" srcSet />
              </Link>
              <div className="left-title">
              <Link to={`/cuisine/${cuisine._id}`}>{ cuisine.title}</Link>
              <div dangerouslySetInnerHTML={{__html:cuisine.sumary}}></div>
              </div>
              <div className="left-quangcao">
                <a href={arrayadvertisements[0].CuisineAdvertisementRightContent}>
                <img className="left-quangcao-img" src={ip+"images/"+arrayadvertisements[0].cuisine} alt="" />
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