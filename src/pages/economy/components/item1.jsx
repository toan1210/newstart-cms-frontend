import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item1({economy,arrayadvertisements}) {
  let {ipapi,iplink} =useAuth();
  console.log(arrayadvertisements[0].EconomyAdvertisementRightContent);
  console.log(arrayadvertisements[0].EconomyAdvertisementRight[0].url);
  return(
      <>
      <div className="page__home-content">
          <div className="left">
            <div className="left__header">
            <Link to={`/economy/${economy.id}`}>
            <img src={iplink+economy.Avata[0].url} alt="" srcSet />
              </Link>
              <div className="left-title">
              <Link to={`/economy/${economy.id}`}>{ economy.TieuDe}</Link>
                <p>{
                    economy.TomTat
                }</p>
              </div>
              <div className="left-quangcao">
                <a href={arrayadvertisements[0].EconomyAdvertisementRightContent}>
                <img className="left-quangcao-img" src={iplink+arrayadvertisements[0].EconomyAdvertisementRight[0].url} alt="" />
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