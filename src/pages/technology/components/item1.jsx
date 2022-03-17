import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';
// import ReactMarkdown from 'react-markdown';
// import { Container } from './styles';

function Item1({technology,arrayadvertisements}) {
  let {ipapi,iplink} = useAuth();
  return(
      <>
      <div className="page__home-content">
          <div className="left">
            <div className="left__header">
            <Link to={`/technology/${technology.id}`}>
                <img src={iplink+technology.Avata[0].url} alt="" srcSet />
              </Link>
              <div className="left-title">
              <Link to={`/technology/${technology.id}`}>{technology.TieuDe}</Link>
                <p>{
                    technology.TomTat
                }</p>
              </div>
              <div className="left-quangcao">
                  <a href={arrayadvertisements[0].TechnologyAdvertisementRightContent}>
                      <img className="left-quangcao-img" src={iplink+arrayadvertisements[0].TechnologyAdvertisementRight[0].url} alt="" />
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