import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item1({entertain,arrayadvertisements}) {
  let {ipapi,iplink} =useAuth();
  return(
      <>
      <div className="page__home-content">
          <div className="left">
            <div className="left__header">
            <Link to={`/entertain/${entertain.id}`}>
            <img src={iplink+entertain.Avata[0].url} alt="" srcSet />
              </Link>
              <div className="left-title">
              <Link to={`/entertain/${entertain.id}`}>{ entertain.TieuDe}</Link>
                <p>{
                    entertain.TomTat
                }</p>
              </div>
              <div className="left-quangcao">
                <a href={arrayadvertisements[0].EntertainAdvertisementRightContent}>
                <img className="left-quangcao-img" src={iplink+arrayadvertisements[0].EntertainAdvertisementRight[0].url} alt="" />
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