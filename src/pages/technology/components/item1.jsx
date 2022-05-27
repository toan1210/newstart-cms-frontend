import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';
import ReactMarkdown from 'react-markdown';
// import ReactMarkdown from 'react-markdown';
// import { Container } from './styles';

function Item1({technology}) {
  let {apihome,apidetailhome,ip} = useAuth();
  console.log(technology);
  return(
      <>
      <div className="page__home-content">
          <div className="left">
            <div className="left__header">
            <Link to={`/technology/${technology._id}`}>
                <img src={ip+"images/"+technology.images} alt="" srcSet />
            </Link>
              <div className="left-title">
              <Link to={`/technology/${technology._id}`}>{technology.title}</Link>
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