import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../core/useAuth";

// import { Container } from './styles';

function Item1({ cultural, arrayadvertisements }) {
  let { ip } = useAuth();
  return (
    <>
      <div className="page__home-content">
        <div className="left">
          <div className="left__header">
            <Link to={`/cultural/${cultural._id}`}>
              <img src={ip + "images/" + cultural.images} alt="" srcSet />
            </Link>
            <div className="left-title">
              <Link to={`/cultural/${cultural._id}`}>{cultural.title}</Link>
              <div dangerouslySetInnerHTML={{ __html: cultural.sumary }}></div>
            </div>
            <div className="left-quangcao">
              <a
                href={arrayadvertisements[0].CulturalAdvertisementRightContent}
              >
                <img
                  className="left-quangcao-img"
                  src={ip + "images/" + arrayadvertisements[0].cultural}
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
