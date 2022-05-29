import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../core/useAuth";

// import { Container } from './styles';

function Item1({ economy, arrayadvertisements }) {
  let { ip } = useAuth();
  return (
    <>
      <div className="page__home-content">
        <div className="left">
          <div className="left__header">
            <Link to={`/economy/${economy._id}`}>
              <img src={ip + "images/" + economy.images} alt="" srcSet />
            </Link>
            <div className="left-title">
              <Link to={`/economy/${economy._id}`}>
                {economy.title}
              </Link>
              <div
                dangerouslySetInnerHTML={{ __html: economy.sumary }}
              ></div>
            </div>
            <div className="left-quangcao">
              <a
                href={
                  arrayadvertisements[0].economyAdvertisementRightContent
                }
              >
                <img
                  className="left-quangcao-img"
                  src={ip + "images/" + arrayadvertisements[0].economy}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="left-content"></div>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
}

export default Item1;
