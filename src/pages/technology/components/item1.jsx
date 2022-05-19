import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';
import ReactMarkdown from 'react-markdown';
// import ReactMarkdown from 'react-markdown';
// import { Container } from './styles';

function Item1({technology}) {
  let {apihome,apidetailhome} = useAuth();
  console.log("technology",technology);
  return(
      <>
      <div className="page__home-content">
          <div className="left">
            <div className="left__header">
            <Link to={`/${apidetailhome}/${technology._id}`}>
                {/* <img src={technology.Avata[0].url} alt="" srcSet /> */}
            </Link>
              <div className="left-title">
              {/* <Link to={`/technology/${technology.id}`}>{technology.TieuDe}</Link> */}
                  <div dangerouslySetInnerHTML={{__html:technology.sumary}}></div>
              </div>
              <div className="left-quangcao">
                  {/* <a href={arrayadvertisements[0].TechnologyAdvertisementRightContent}>
                      <img className="left-quangcao-img" src={`${technology.images}`} alt="" />
                  </a> */}
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