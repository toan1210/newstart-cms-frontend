import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item1({tourism,arrayadvertisements}) {
  let {ipapi,iplink} = useAuth();
  return(
      <>
      <div className="page__home-content">
          <div className="left">
            <div className="left__header">
            <Link to={`/tourism/${tourism.id}`}>
                <img src={iplink+tourism.Avata[0].url} alt="" srcSet />
              </Link>
              <div className="left-title">
              <Link to={`/tourism/${tourism.id}`}>{tourism.TieuDe}</Link>
                <p>
                {
                    tourism.TomTat
                }
                </p>
              </div>
              <div className="left-quangcao">
                <a href={arrayadvertisements[0].TourismAdvertisementRightContent}>
                <img className="left-quangcao-img" src={iplink+arrayadvertisements[0].TourismAdvertisementRight[0].url} alt="" />
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