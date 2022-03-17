import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';
// import { Container } from './styles';
function Item1({living,arrayadvertisements}) {
  let {ipapi,iplink} = useAuth();
  return(
      <>
      <div className="page__home-content">
          <div className="left">
            <div className="left__header">
              <Link to={`/living/${living.id}`}>
                <img src={iplink+living.Avata[0].url} alt="" srcSet />
              </Link>
              <div className="left-title">
                <Link to={`/living/${living.id}`}>{living.TieuDe}</Link>
                <p>{
                    living.TomTat
                }</p>
              </div>
              <div className="left-quangcao">
                <a href={arrayadvertisements[0].LivingAdvertisementRightContent}>
                  <img className="left-quangcao-img" src={iplink+arrayadvertisements[0].LivingAdvertisementRight[0].url} alt="" />
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